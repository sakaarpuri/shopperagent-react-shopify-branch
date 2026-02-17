'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CURATED_PRODUCTS, matchProducts, generateMatchExplanation, POPULAR_BRANDS, INSPIRATION_BOARDS } from '@/lib/catalog';
import { STYLE_OPTIONS } from '@/lib/catalog';
import { cn, formatPrice } from '@/lib/utils';
import { 
  ShoppingBag, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  ExternalLink,
  RefreshCw,
  Heart,
  Search,
  Zap,
  Bot,
  Minus,
  Plus,
  Palette,
  CheckCircle2,
  Brain,
  Eye,
  Target,
  CreditCard,
  Truck
} from 'lucide-react';
import type { Product, UserPreferences, InspirationBoard } from '@/types';

type Step = 'landing' | 'inspiration' | 'items' | 'style' | 'budget' | 'brands' | 'results' | 'checkout';
type LoadingStep = 'analyzing' | 'scanning' | 'matching' | 'curating';

const BUDGET_RANGES = [
  { label: 'Under $50', value: 50 },
  { label: '$50 - $100', value: 100 },
  { label: '$100 - $200', value: 200 },
  { label: '$200 - $500', value: 500 },
  { label: '$500 - $1000', value: 1000 },
  { label: '$1000+', value: 2000 },
];

const SIZE_CHARTS: Record<string, string[]> = {
  tops: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  bottoms: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '36'],
  shoes: ['5', '6', '7', '8', '9', '10', '11', '12'],
  dresses: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  outerwear: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  accessories: ['One Size']
};

const LOADING_STEPS: { id: LoadingStep; label: string; icon: React.ReactNode }[] = [
  { id: 'analyzing', label: 'Analyzing your style preferences...', icon: <Brain className="w-5 h-5" /> },
  { id: 'scanning', label: 'Scanning 10,000+ items across retailers...', icon: <Eye className="w-5 h-5" /> },
  { id: 'matching', label: 'Matching items to your preferences...', icon: <Target className="w-5 h-5" /> },
  { id: 'curating', label: 'Curating your perfect cart...', icon: <Sparkles className="w-5 h-5" /> },
];

export default function Home() {
  const [step, setStep] = useState<Step>('landing');
  const [brandSearch, setBrandSearch] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [loadingStep, setLoadingStep] = useState<LoadingStep>('analyzing');
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const [preferences, setPreferences] = useState<UserPreferences>({
    gender: '',
    categories: [],
    styles: [],
    brands: [],
    budget: 100,
    strictBrands: false,
    mode: 'pure'
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<Product[]>([]);

  const CATEGORIES = [
    { id: 'tops', label: 'Tops', icon: '👕' },
    { id: 'bottoms', label: 'Bottoms', icon: '👖' },
    { id: 'outerwear', label: 'Outerwear', icon: '🧥' },
    { id: 'shoes', label: 'Shoes', icon: '👟' },
    { id: 'accessories', label: 'Accessories', icon: '👜' },
    { id: 'dresses', label: 'Dresses', icon: '👗' }
  ];

  useEffect(() => {
    if (isGenerating) {
      const steps: LoadingStep[] = ['analyzing', 'scanning', 'matching', 'curating'];
      let currentStep = 0;
      
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          setLoadingStep(steps[currentStep]);
          setLoadingProgress(((currentStep + 1) / steps.length) * 100);
          currentStep++;
        }
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleInspirationSelect = (board: InspirationBoard) => {
    setPreferences(prev => ({
      ...prev,
      styles: board.styles,
      brands: board.brands,
      budget: board.budgetRange
    }));
    setStep('items');
  };

  const toggleCategory = (catId: string) => {
    setPreferences(prev => ({
      ...prev,
      categories: prev.categories.includes(catId)
        ? prev.categories.filter(c => c !== catId)
        : [...prev.categories, catId]
    }));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, Math.min(4, (prev[productId] || 1) + delta))
    }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setLoadingStep('analyzing');
    setLoadingProgress(0);
    
    setTimeout(() => {
      const matched = matchProducts(CURATED_PRODUCTS, {
        styles: preferences.styles,
        brands: preferences.brands,
        budget: preferences.budget,
        gender: preferences.gender,
        categories: preferences.categories,
        strictBrands: preferences.strictBrands && preferences.brands.length > 0
      });
      
      const initialQuantities: Record<string, number> = {};
      matched.forEach(p => initialQuantities[p.id] = 1);
      setQuantities(initialQuantities);
      
      setResults(matched.slice(0, 8));
      setIsGenerating(false);
      setStep('results');
    }, 3500);
  };

  const cartTotal = results.reduce((acc, p) => acc + (p.price * (quantities[p.id] || 1)), 0);
  const cartItemCount = results.reduce((acc, p) => acc + (quantities[p.id] || 1), 0);

  const filteredBrands = POPULAR_BRANDS.filter(b => 
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const displayedBrands = brandSearch ? filteredBrands : POPULAR_BRANDS.slice(0, 12);

  if (isGenerating) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-surface" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-4 border-accent/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="w-10 h-10 text-accent" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-2">AI Shopping in Progress</h2>
            <p className="text-muted mb-8">Finding perfect matches for your style</p>

            <div className="space-y-4">
              {LOADING_STEPS.map((step, index) => {
                const isActive = LOADING_STEPS.findIndex(s => s.id === loadingStep) >= index;
                const isCurrent = step.id === loadingStep;
                return (
                  <motion.div key={step.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: isActive ? 1 : 0.3, x: 0 }}
                    className={cn("flex items-center gap-3 p-3 rounded-xl transition-all", isCurrent && "bg-accent/10 border border-accent/30")}>
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", isCurrent ? "bg-accent text-background" : isActive ? "bg-accent/20 text-accent" : "bg-surface text-muted")}>
                      {isActive && !isCurrent ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
                    </div>
                    <span className={cn("text-sm", isCurrent && "font-medium")}>{step.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8">
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: `${loadingProgress}%` }} />
              </div>
              <p className="text-xs text-muted mt-2 text-center">{Math.round(loadingProgress)}% complete</p>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-surface-hover">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Bot className="w-4 h-4 text-background" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ShopperAgent</span>
          </div>
          {step !== 'landing' && step !== 'checkout' && (
            <button onClick={() => setStep('landing')} className="text-sm text-muted hover:text-foreground">Start Over</button>
          )}
        </div>
      </header>

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            
            {step === 'landing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-8">
                  <Bot className="w-4 h-4" />
                  <span>AI Personal Shopper</span>
                </motion.div>
                
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
                  AI to Shop for Clothes<br /><span className="text-gradient">& Order For You</span>
                </motion.h1>
                
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-muted mb-12 max-w-2xl">
                  Tell ShopperAgent what you need. It finds perfect pieces across brands and budgets, then builds your cart for easy checkout.
                </motion.p>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  <button onClick={() => setStep('items')} className="luxury-button flex items-center gap-3 text-lg px-10 py-5">
                    <Zap className="w-5 h-5" />
                    Start Shopping
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setStep('inspiration')} className="flex items-center gap-2 px-6 py-3 rounded-full border border-surface-hover hover:bg-surface transition-all">
                    <Palette className="w-4 h-4" />
                    Browse Inspiration
                  </button>
                </motion.div>
              </motion.div>
            )}

            {step === 'inspiration' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold mb-3">Get Inspired</h2>
                  <p className="text-muted">Select a curated look to start</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {INSPIRATION_BOARDS.map((board) => (
                    <button key={board.id} onClick={() => handleInspirationSelect(board)} className="group relative overflow-hidden rounded-2xl text-left aspect-[4/3]">
                      <img src={board.image} alt={board.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs text-accent uppercase tracking-wider">{board.tag}</span>
                        <h3 className="text-xl font-semibold mt-1">{board.name}</h3>
                        <p className="text-sm text-muted mt-1">{board.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="text-center">
                  <button onClick={() => setStep('items')} className="text-muted hover:text-foreground">Or start from scratch →</button>
                </div>
              </motion.div>
            )}

            {step === 'items' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <span className="text-sm text-muted uppercase tracking-wider">Step 1 of 4</span>
                  <h2 className="text-3xl font-semibold mt-2 mb-3">What do you need?</h2>
                </div>

                <div className="glass-panel p-6">
                  <label className="text-sm text-muted uppercase tracking-wider mb-4 block text-center">Select Gender</label>
                  <div className="flex gap-3 justify-center">
                    {(['womens', 'mens', 'unisex'] as const).map((g) => (
                      <button key={g} onClick={() => setPreferences(prev => ({ ...prev, gender: g }))}
                        className={cn("px-6 py-3 rounded-xl text-base font-medium transition-all", preferences.gender === g ? "bg-accent text-background" : "bg-surface text-muted hover:text-foreground")}>
                        {g === 'womens' && '👩 '}{g === 'mens' && '👨 '}{g === 'unisex' && '👤 '}
                        {g.charAt(0).toUpperCase() + g.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <label className="text-sm text-muted uppercase tracking-wider mb-4 block text-center">Select Categories</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {CATEGORIES.map((cat) => {
                      const isSelected = preferences.categories.includes(cat.id);
                      return (
                        <button key={cat.id} onClick={() => toggleCategory(cat.id)}
                          className={cn("p-4 rounded-xl border text-center transition-all", isSelected ? "border-accent bg-accent/10" : "border-surface-hover hover:border-accent/30 bg-surface/30")}>
                          <span className="text-2xl mb-1 block">{cat.icon}</span>
                          <span className="font-medium text-sm">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {preferences.categories.length > 0 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="glass-panel p-6 space-y-4">
                    <label className="text-sm text-muted uppercase tracking-wider block text-center">Select Your Sizes</label>
                    {preferences.categories.map(catId => (
                      <div key={catId} className="flex items-center gap-4">
                        <span className="text-sm font-medium w-24 capitalize">{catId}:</span>
                        <div className="flex flex-wrap gap-2">
                          {(SIZE_CHARTS[catId] || ['One Size']).map(size => (
                            <button key={size} onClick={() => setSelectedSizes(prev => ({ ...prev, [catId]: size }))}
                              className={cn("px-3 py-1.5 rounded-lg text-sm border transition-all", selectedSizes[catId] === size ? "border-accent bg-accent/10" : "border-surface-hover hover:border-accent/30")}>
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                <div className="flex justify-end">
                  <button onClick={() => setStep('style')} disabled={!preferences.gender || preferences.categories.length === 0}
                    className={cn("luxury-button flex items-center gap-2", (!preferences.gender || preferences.categories.length === 0) && "opacity-50 cursor-not-allowed")}>
                    Continue<ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'style' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <span className="text-sm text-muted uppercase tracking-wider">Step 2 of 4</span>
                  <h2 className="text-3xl font-semibold mt-2 mb-3">What's your style?</h2>
                  <p className="text-muted">Select one or more</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {STYLE_OPTIONS.map((style) => {
                    const isSelected = preferences.styles.includes(style.id);
                    return (
                      <button key={style.id} onClick={() => {
                        if (isSelected) {
                          setPreferences(prev => ({ ...prev, styles: prev.styles.filter(s => s !== style.id) }));
                        } else {
                          setPreferences(prev => ({ ...prev, styles: [...prev.styles, style.id] }));
                        }
                      }} className={cn("p-4 rounded-xl border text-left transition-all", isSelected ? "border-accent bg-accent/10" : "border-surface-hover hover:border-accent/30 bg-surface/30")}>
                        <span className="text-xl mb-1 block">{style.icon}</span>
                        <h4 className="font-medium text-sm">{style.label}</h4>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setStep('items')} className="flex items-center gap-2 text-muted hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" />Back
                  </button>
                  <button onClick={() => setStep('budget')} disabled={preferences.styles.length === 0}
                    className={cn("luxury-button flex items-center gap-2", preferences.styles.length === 0 && "opacity-50 cursor-not-allowed")}>
                    Continue<ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'budget' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 max-w-xl mx-auto">
                <div className="text-center">
                  <span className="text-sm text-muted uppercase tracking-wider">Step 3 of 4</span>
                  <h2 className="text-3xl font-semibold mt-2 mb-3">What's your budget?</h2>
                  <p className="text-muted">Per item price range</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {BUDGET_RANGES.map((range) => (
                    <button key={range.value} onClick={() => setPreferences(prev => ({ ...prev, budget: range.value }))}
                      className={cn("p-4 rounded-xl border text-center transition-all", preferences.budget === range.value ? "border-accent bg-accent/10" : "border-surface-hover hover:border-accent/30 bg-surface/30")}>
                      <span className="font-medium">{range.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setStep('style')} className="flex items-center gap-2 text-muted hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" />Back
                  </button>
                  <button onClick={() => setStep('brands')} className="luxury-button flex items-center gap-2">
                    Continue<ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'brands' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <span className="text-sm text-muted uppercase tracking-wider">Step 4 of 4 (Optional)</span>
                  <h2 className="text-3xl font-semibold mt-2 mb-3">Any specific brands?</h2>
                </div>

                <button onClick={handleGenerate} className="w-full py-4 rounded-xl bg-accent/10 border-2 border-accent text-accent hover:bg-accent/20 transition-all font-medium">
                  Or skip to see options across all brands
                </button>

                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input type="text" placeholder="Search brands..." value={brandSearch} onChange={(e) => setBrandSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-surface-hover rounded-xl" />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {displayedBrands.map((brand) => {
                    const isSelected = preferences.brands.includes(brand.id);
                    return (
                      <button key={brand.id} onClick={() => {
                        if (isSelected) {
                          setPreferences(prev => ({ ...prev, brands: prev.brands.filter(b => b !== brand.id) }));
                        } else {
                          setPreferences(prev => ({ ...prev, brands: [...prev.brands, brand.id] }));
                        }
                      }} className={cn("p-3 rounded-xl border text-center transition-all", isSelected ? "border-accent bg-accent/10" : "border-surface-hover hover:border-accent/30")}>
                        <span className="font-medium text-sm">{brand.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-start">
                  <button onClick={() => setStep('budget')} className="flex items-center gap-2 text-muted hover:text-foreground">
                    <ArrowLeft className="w-4 h-4" />Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'results' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold mb-2">Your AI-Curated Cart</h2>
                  <p className="text-muted">{cartItemCount} items • {formatPrice(cartTotal)}</p>
                </div>

                {results.length > 0 ? (
                  <>
                    <div className="glass-panel p-6 flex items-center justify-between sticky top-20 z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{cartItemCount} items</p>
                          <p className="text-2xl font-semibold">{formatPrice(cartTotal)}</p>
                        </div>
                      </div>
                      <button onClick={() => setStep('checkout')} className="luxury-button flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />Checkout
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {results.map((product, i) => (
                        <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-panel overflow-hidden">
                          <div className="flex">
                            <div className="w-32 h-32 bg-surface flex-shrink-0">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex-1 min-w-0">
                              <p className="text-xs text-accent uppercase">{product.brand}</p>
                              <h3 className="font-medium text-sm truncate">{product.name}</h3>
                              <p className="text-xs text-muted">{product.category}</p>
                              <p className="font-semibold mt-1">{formatPrice(product.price)}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <button onClick={() => updateQuantity(product.id, -1)} className="w-7 h-7 rounded-full bg-surface flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                                <span className="w-6 text-center text-sm">{quantities[product.id] || 1}</span>
                                <button onClick={() => updateQuantity(product.id, 1)} className="w-7 h-7 rounded-full bg-surface flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="glass-panel p-8 text-center">
                    <p className="text-muted mb-4">No matches found.</p>
                    <button onClick={() => setStep('budget')} className="luxury-button">Adjust Budget</button>
                  </div>
                )}
              </motion.div>
            )}

            {step === 'checkout' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-semibold mb-2">Checkout</h2>
                  <p className="text-muted">Complete your purchase</p>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  {results.map(product => (
                    <div key={product.id} className="flex justify-between py-2 border-b border-surface-hover">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted">Qty: {quantities[product.id] || 1}</p>
                      </div>
                      <p className="font-semibold">{formatPrice(product.price * (quantities[product.id] || 1))}</p>
                    </div>
                  ))}
                  <div className="flex justify-between pt-4 text-xl font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                <div className="glass-panel p-6 mb-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5" />Delivery
                  </h3>
                  <p className="text-sm text-muted">Items will be sourced from multiple retailers and delivered to your address.</p>
                </div>

                <button className="w-full luxury-button py-4 text-lg">
                  Pay {formatPrice(cartTotal)}
                </button>

                <div className="mt-8 text-center">
                  <button onClick={() => setStep('results')} className="text-muted hover:text-foreground">
                    ← Back to cart
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
