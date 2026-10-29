import { type ReactNode } from 'react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowUpRight, Clock3, Heart, MapPin, Phone, Star } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [hindi, setHindi] = useState(false);
  const copy = hindi ? {
    eyebrow: 'पटना में आपका पड़ोस का कैफ़े',
    heading: <>एक कटोरा<br />भर अपनापन।</>,
    intro: 'एमआर-चंदन में मिलिए, कुछ नया चखिए और थोड़ी देर ठहरिए। कंकड़बाग की अपनी-सी जगह।',
    explore: 'लोग क्या कहते हैं',
    about: 'स्वाद में दुनिया, दिल से पटना',
    aboutText: 'एमआर-चंदन एक कैफ़े है—जहाँ अलग-अलग स्वाद और दोस्ताना सेवा साथ मिलते हैं। यहाँ की पहचान मेहमानों की बातों में है: अच्छा खाना, बढ़िया वैल्यू और अपनापन।',
    mentions: 'मेहमानों की नज़र से',
    mentionsText: 'समीक्षाओं में जिन स्वादों का ज़िक्र आता है',
    reviews: 'सच्चे शब्द, सच्चा स्वागत',
    visit: 'कभी भी आइए',
    addressLabel: 'हमें यहाँ पाएँ',
    address: 'कांति भवन, इंदिरा नगर मेन रोड, वेस्ट अशोक नगर, कंकड़बाग, मीठापुर, पटना, बिहार 800001',
    call: 'फ़ोन करें',
    directions: 'दिशा-निर्देश पाएँ',
    open: '24 घंटे खुला',
    footer: 'पटना में, आपके लिए।'
  } : {
    eyebrow: 'Your neighbourhood café in Patna',
    heading: <>A little bowl<br />of belonging.</>,
    intro: 'Come as you are. Try something new. Stay a little. MR-CHANDAN is your Kankarbagh café for good food and easy company.',
    explore: 'Hear from our guests',
    about: 'A world of flavour, a Patna heart',
    aboutText: 'MR-CHANDAN is a café where varied flavours meet a warm welcome. Ask the people who have stopped by: they talk about good food, good value and staff who make you feel at home.',
    mentions: 'A taste of what guests mention',
    mentionsText: 'A few favourites that show up in customer reviews',
    reviews: 'Real words. Warm welcome.',
    visit: 'Drop by, any hour',
    addressLabel: 'Find us here',
    address: 'Kanti Bhawan, Indira Nagar Main Rd, West Ashok Nagar, Kankarbagh, Mithapur, Patna, Bihar 800001',
    call: 'Give us a call',
    directions: 'Get directions',
    open: 'Listed open 24 hours',
    footer: 'Made for Patna, and everyone passing through.'
  };
  const mentions = [
    { title: 'Ramen bowls', subtitle: hindi ? 'समीक्षाओं में ज़िक्र' : 'Mentioned in reviews', mark: '01' },
    { title: 'Kimbap', subtitle: hindi ? 'समीक्षाओं में ज़िक्र' : 'Mentioned in reviews', mark: '02' },
    { title: 'Chicken fry', subtitle: hindi ? 'समीक्षाओं में ज़िक्र' : 'Mentioned in reviews', mark: '03' },
  ];
  return (
    <main className={`grain ${hindi ? 'font-hindi' : ''}`}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MR-CHANDAN home">
          <span className="brand-seal">MC</span><span className="brand-name">MR-CHANDAN<small>एमआर-चंदन · PATNA</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">{hindi ? 'हमारी बात' : 'Our place'}</a>
          <a href="#mentions">{hindi ? 'स्वाद' : 'Flavours'}</a>
          <a href="#visit">{hindi ? 'मिलें' : 'Find us'}</a>
        </nav>
        <div className="header-actions">
          <button className="language-switch" onClick={() => setHindi(!hindi)} data-testid="button-language-toggle" aria-label={hindi ? 'Switch to English' : 'हिंदी में देखें'}>
            {hindi ? 'EN' : 'हिंदी'}
          </button>
          <a className="header-call" href="tel:+917992288479" data-testid="link-header-phone"><Phone size={15} /> <span>{hindi ? 'कॉल करें' : 'Call us'}</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal"><span className="eyebrow-line" />{copy.eyebrow}</div>
          <h1 className="hero-title reveal-delay">{copy.heading}</h1>
          <p className="hero-intro">{copy.intro}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#reviews">{copy.explore}<ArrowDown size={16} /></a>
            <span className="hero-note"><span className="open-dot" />{copy.open}</span>
          </div>
          <div className="hero-rating">
            <div className="rating-stars" aria-label="4.8 out of 5 stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
            <strong>4.8</strong><span>·</span><span>{hindi ? '18 समीक्षाएँ' : '18 reviews'}</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-frame"><img src="/cafe-table-art.png" alt="Illustrative still life of ramen, kimbap and chicken fry" /></div>
          <div className="art-caption"><span>{hindi ? 'एक स्वादिष्ट विराम' : 'A good pause, served warm'}</span><span>01 / PATNA</span></div>
          <div className="art-stamp"><span>GOOD<br />FOOD<br /><i>GOOD</i><br />COMPANY</span></div>
          <p className="illustration-note">{hindi ? 'खाने का चित्रण · वास्तविक जगह की तस्वीर नहीं' : 'Illustrative food still life · not a venue photograph'}</p>
        </div>
        <div className="hero-vertical">KANKARBAGH&nbsp; · &nbsp;PATNA&nbsp; · &nbsp;BIHAR</div>
      </section>

      <div className="ticker" aria-label="Café highlights">
        <span>GOOD FOOD</span><i>·</i><span>OPEN TO EVERYONE</span><i>·</i><span>PATNA, BIHAR</span><i>·</i><span>GOOD COMPANY</span><i>·</i><span>GOOD FOOD</span>
      </div>

      <section className="story section-wrap" id="story">
        <div className="section-index"><span>01</span><span className="index-rule" />{hindi ? 'हमारा कैफ़े' : 'THE CAFÉ'}</div>
        <div className="story-main">
          <p className="story-kicker">{hindi ? 'अपनी जगह, सबके लिए' : 'A place that feels like yours'}</p>
          <h2 className="section-heading">{copy.about}</h2>
          <p className="story-copy">{copy.aboutText}</p>
          <a className="text-link" href="#visit">{hindi ? 'आने का रास्ता देखें' : 'Come say hello'} <ArrowUpRight size={16} /></a>
        </div>
        <div className="story-aside">
          <div className="aside-orbit"><Heart size={24} strokeWidth={1.3} /><span>ALL<br />ARE<br />WELCOME</span></div>
          <p>{hindi ? 'LGBTQ+ के अनुकूल' : 'LGBTQ+ friendly'}</p>
          <span className="aside-small">{hindi ? 'स्वागत है, जैसे आप हैं' : 'Come exactly as you are'}</span>
        </div>
      </section>

      <section className="mentions-section" id="mentions">
        <div className="section-wrap mentions-wrap">
          <div className="section-index light-index"><span>02</span><span className="index-rule" />{hindi ? 'समीक्षाओं में' : 'ON THE TABLE'}</div>
          <div className="mentions-heading-row">
            <div><p className="overline">{hindi ? 'मेहमानों की नज़र से' : 'A FEW THINGS PEOPLE LOVE'}</p><h2 className="section-heading">{copy.mentions}</h2></div>
            <p className="mentions-lede">{copy.mentionsText}.<br />{hindi ? 'यह आधिकारिक मेन्यू नहीं है।' : 'These are review mentions, not an official menu.'}</p>
          </div>
          <div className="mention-list">
            {mentions.map((item) => <article className="mention-row" key={item.mark}>
              <span className="mention-number">{item.mark}</span><h3>{item.title}</h3><span className="mention-sub">{item.subtitle}</span><ArrowUpRight className="mention-arrow" size={19} />
            </article>)}
          </div>
          <div className="mention-bottom"><span>FLAVOURS THAT TRAVEL</span><span>ROOM FOR EVERYONE · पटना</span></div>
        </div>
      </section>

      <section className="reviews section-wrap" id="reviews">
        <div className="section-index"><span>03</span><span className="index-rule" />{hindi ? 'मेहमानों की बातें' : 'KIND WORDS'}</div>
        <div className="reviews-content">
          <div className="reviews-heading">
            <p className="overline">{hindi ? 'समीक्षाओं से' : 'FROM THE REVIEWS'}</p>
            <h2 className="section-heading">{copy.reviews}</h2>
            <div className="reviews-score"><span className="score-number">4.8</span><div><div className="rating-stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div><small>{hindi ? '18 समीक्षाओं के आधार पर' : 'Based on 18 reviews'}</small></div></div>
          </div>
          <div className="quote-stack">
            <blockquote><span className="quote-mark">“</span><p>The food was good! The staffs were friendly.</p><cite>{hindi ? 'एक मेहमान की समीक्षा' : 'A guest review'}</cite></blockquote>
            <blockquote><span className="quote-mark">“</span><p>Tastes good, they've tried to maintain authenticity.</p><cite>{hindi ? 'एक मेहमान की समीक्षा' : 'A guest review'}</cite></blockquote>
          </div>
        </div>
        <div className="review-footer"><span>{hindi ? 'अच्छा खाना, अच्छी वैल्यू, दोस्ताना लोग।' : 'Good food. Good value. Friendly people.'}</span><span>— THE WORD AROUND HERE</span></div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-inner section-wrap">
          <div className="section-index light-index"><span>04</span><span className="index-rule" />{hindi ? 'यहाँ मिलें' : 'COME ON IN'}</div>
          <div className="visit-grid">
            <div className="visit-head"><p className="overline">{hindi ? 'आपका इंतज़ार रहेगा' : 'WE’LL SAVE YOU A SEAT'}</p><h2 className="section-heading">{copy.visit}<span className="visit-period">.</span></h2>
              <div className="hours-chip"><Clock3 size={16} />{hindi ? 'सूची के अनुसार 24 घंटे खुला' : 'Listed open 24 hours'}</div>
            </div>
            <div className="visit-details">
              <div className="detail-block"><span className="detail-label"><MapPin size={15} />{copy.addressLabel}</span><p>{copy.address}</p></div>
              <div className="visit-links">
                <a className="button-cream" href="https://www.google.com/maps/dir/?api=1&destination=Kanti+Bhawan%2C+Indira+Nagar+Main+Rd%2C+West+Ashok+Nagar%2C+Kankarbagh%2C+Mithapur%2C+Patna%2C+Bihar+800001" target="_blank" rel="noreferrer" data-testid="link-google-maps"><MapPin size={16} />{copy.directions}<ArrowUpRight size={16} /></a>
                <a className="button-outline" href="tel:+917992288479" data-testid="link-phone"><Phone size={16} />{copy.call}<span>+91 79922 88479</span></a>
              </div>
            </div>
          </div>
          <div className="visit-bottom"><span>MR-CHANDAN · एमआर-चंदन</span><span>{hindi ? 'कंकड़बाग, पटना' : 'Kankarbagh, Patna, Bihar'}</span></div>
        </div>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-seal">MC</span><span className="brand-name">MR-CHANDAN<small>एमआर-चंदन · PATNA</small></span></a><p>{copy.footer}</p><a href="#top" className="back-top" aria-label="Back to top"><ArrowDown size={15} /> {hindi ? 'ऊपर जाएँ' : 'Back to top'}</a></footer>
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
