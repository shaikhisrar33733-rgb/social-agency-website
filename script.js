/**
 * LUCCI MEDIA — Boston's #1 Beauty & Wellness Marketing Agency
 * Strictly Vanilla ES6+ (No React, No jQuery, No Frameworks)
 * 
 * Features:
 * 1. Case Studies Database for Modal Quick-View
 * 2. Sticky Header Scroll Detection
 * 3. Mobile Navigation Drawer & Focus Management
 * 4. Bi-directional IntersectionObserver Scroll Reveal Motion System
 * 5. Interactive Path Picker ("Where Are You Right Now?")
 * 6. Animated Stat Counters for Proof Band
 * 7. Portfolio Category Filter & Archive Drawer
 * 8. Boston Real-Time Live Studio Clock (EST/EDT)
 * 9. Client Application Form Validation & Smooth Feedback
 * 10. Accessible Keyboard Navigation & Back-to-Top
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA: Case Studies for Modal Quick-View
  // ==========================================================================
  const caseStudies = {
    1: {
      client: "Aura Med Spa Back Bay",
      title: "Full Clinical Rebrand & Booking Engine",
      category: "Social Media Management &bull; Med Spa Retainer",
      year: "2026",
      image: "assets/images/work-skincare.jpg",
      summary: "A high-end Back Bay medical aesthetics practice seeking to fill injectable and laser treatment appointments without resorting to discount-driven promotions. We orchestrated full-production content days, educational treatment reels, and high-converting booking funnels.",
      stats: [
        { val: "40", label: "New Consults in 30 Days" },
        { val: "$118K", label: "Injectable Revenue Lift" },
        { val: "100%", label: "Waitlist Filled" }
      ],
      deliverables: ["Monthly Bespoke Strategy", "Full On-Location Shoot Days", "High-Converting Patient Reels", "Community Engagement & Lead Routing"]
    },
    2: {
      client: "The Injector Club",
      title: "Viral Short-Form Treatment Retainer",
      category: "Trending Socials &bull; Monthly Content Retainer",
      year: "2026",
      image: "assets/images/work-social.jpg",
      summary: "A premier aesthetic injection team needing NYC-caliber visual creative. We captured monthly batch-shot trending reels, subtle facial anatomy animations, and before/after transformations that established their injectors as the top choice in New England.",
      stats: [
        { val: "$94K", label: "Direct Booking Revenue" },
        { val: "4.8M", label: "Targeted Reel Views" },
        { val: "3 Weeks", label: "Advance Waitlist" }
      ],
      deliverables: ["Dedicated Monthly Content Day", "18 Batch-Edited Reels", "Native Beauty Color Grading", "Hook & Audio Trend Spotting"]
    },
    3: {
      client: "L'Étoile Atelier Salon",
      title: "Editorial Brand Stills & Runway Lookbook",
      category: "Brand Photography &bull; Editorial Shoot",
      year: "2025",
      image: "assets/images/work-fashion.jpg",
      summary: "A luxury Newbury Street salon transitioning to an ultra-exclusive editorial positioning. We directed studio softbox lighting, sculptural hair styling photography, and founder portraits featured across Boston lifestyle press.",
      stats: [
        { val: "6 Mos", label: "Fully Booked Ahead" },
        { val: "+45%", label: "Average Ticket Lift" },
        { val: "14.2K", label: "Website Visits" }
      ],
      deliverables: ["Studio Stills & Lookbook", "Master Stylist Action Stills", "Founder Brand Portraits", "Commercial Print Licensing"]
    },
    4: {
      client: "Botanical Skin Lab",
      title: "Clean Clinical Launch Campaign",
      category: "Campaigns &bull; Product & Treatment Launch",
      year: "2026",
      image: "assets/images/work-botanical.jpg",
      summary: "Launch of a proprietary botanical facial peel protocol. We engineered a 14-day announcement runway, countdown story assets, local creator gifting seeding, and conversion-focused paid creative.",
      stats: [
        { val: "+320%", label: "Inquiry Surge" },
        { val: "340", label: "Launch Day Bookings" },
        { val: "4.2x", label: "ROAS on Paid Ads" }
      ],
      deliverables: ["Multi-Week Rollout Blueprint", "Teaser Reels & Reveal Assets", "Local Creator Seeding", "Paid Social Ad Creative"]
    },
    5: {
      client: "Soma Wellness House",
      title: "Holistic Aesthetic & Social Takeover",
      category: "Social Media Management &bull; Studio Retainer",
      year: "2025",
      image: "assets/images/work-ceramics.jpg",
      summary: "A serene holistic spa and lymphatic drainage studio. We produced meditative behind-the-scenes content and tactile treatment visuals that resonated with Boston's high-net-worth wellness demographic.",
      stats: [
        { val: "1.4M", label: "Boston-Area Views" },
        { val: "18%", label: "Profile Visit Rate" },
        { val: "92%", label: "Membership Retention" }
      ],
      deliverables: ["Monthly Grid Architecture", "Tactile Treatment Stills", "Short-Form Video Production", "VIP Client Testimonial Series"]
    },
    6: {
      client: "Maison Glow Studio",
      title: "Signature Glass Skin Brand Photography",
      category: "Brand Photography &bull; Editorial Stills",
      year: "2026",
      image: "assets/images/work-parfum.jpg",
      summary: "Macro skincare and clinical device imagery captured in our studio. We focused on texture, liquid viscosity, and skin luminosity to elevate their service menu into a luxury editorial artifact.",
      stats: [
        { val: "88%", label: "Rebooking Retention" },
        { val: "120+", label: "High-Res Campaign Stills" },
        { val: "Featured", label: "Regional Press" }
      ],
      deliverables: ["Macro Beauty Stills", "Treatment Protocol Capture", "Website Image Library", "Digital Menu Retouching"]
    },
    7: {
      client: "Nova Derm Clinic",
      title: "Grand Opening Launch Campaign",
      category: "Campaigns &bull; Expansion",
      year: "2026",
      image: "assets/images/service-campaign.jpg",
      summary: "Launch campaign for a modern dermatology and laser clinic expansion in Seaport Boston.",
      stats: [
        { val: "340", label: "Waitlist in 10 Days" },
        { val: "100%", label: "Opening Week Booked" },
        { val: "4.9★", label: "Patient Rating" }
      ],
      deliverables: ["Launch Timeline", "VIP Teasers", "Local Influencer Preview", "Lead Generation Funnel"]
    },
    8: {
      client: "Studio Brow & Lash",
      title: "Trending Socials Batch Content Retainer",
      category: "Trending Socials &bull; Content Day",
      year: "2025",
      image: "assets/images/service-content.jpg",
      summary: "Rapid-fire trend spotting and micro-blade tutorial reels that amassed 4.8M views.",
      stats: [
        { val: "4.8M", label: "Reels & TikTok Views" },
        { val: "6 Weeks", label: "Calendar Filled" },
        { val: "22", label: "Batch Produced Reels" }
      ],
      deliverables: ["Monthly Content Day", "Macro Brow Stills", "Trend Audio Curation", "Editing & Color Grading"]
    },
    9: {
      client: "Élixir Botanique",
      title: "High Luxury Skincare Bottle Stills",
      category: "Brand Photography &bull; Product",
      year: "2026",
      image: "assets/images/hero-product.jpg",
      summary: "Editorial bottle and formula textures for an exclusive clean beauty apothecary.",
      stats: [
        { val: "Vogue", label: "Scandinavia Feature" },
        { val: "+210%", label: "D2C Online Sales" },
        { val: "45+", label: "E-comm Stills" }
      ],
      deliverables: ["Chiaroscuro Studio Stills", "Liquid Texture Macro", "Packaging Stills", "Press Ready Retouching"]
    }
  };

  // ==========================================================================
  // 2. STICKY HEADER SCROLL DETECTION
  // ==========================================================================
  const header = document.getElementById('header');
  const scrollThreshold = 40;

  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ==========================================================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn');

  const openMobileNav = () => {
    if (!mobileMenuBtn || !mobileNav) return;
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    if (!mobileMenuBtn || !mobileNav) return;
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
        mobileMenuBtn.focus();
      }
    });
  }

  // ==========================================================================
  // 4. INTERSECTION OBSERVER FOR BI-DIRECTIONAL SCROLL ANIMATIONS
  // ==========================================================================
  document.documentElement.classList.add('js-anim-ready');

  const revealSelector = '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger-item, .reveal-text';
  const revealElements = document.querySelectorAll(revealSelector);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const triggerHeroAnimation = () => {
    const heroElements = document.querySelectorAll('#hero .reveal, #hero .reveal-up, #hero .reveal-left, #hero .reveal-right, #hero .reveal-scale, #hero .reveal-text');
    heroElements.forEach(el => el.classList.add('revealed'));
    const heroHeading = document.getElementById('hero-heading');
    if (heroHeading) {
      heroHeading.classList.add('hero-loaded', 'revealed');
    }
  };

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: [0, 0.15]
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (entry.isIntersecting) {
          target.classList.add('revealed');
        } else {
          const isOffscreenBottom = rect.top > viewportHeight + 50;
          const isOffscreenTop = rect.bottom < -50;
          const isInsideHero = target.closest('#hero');

          if (isInsideHero && window.scrollY < 180) {
            return;
          }

          if (isOffscreenBottom || isOffscreenTop) {
            target.classList.remove('revealed');
          }
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Stagger group delay setup
    const staggerGroups = document.querySelectorAll('.stagger-group');
    staggerGroups.forEach(group => {
      const items = group.querySelectorAll('.stagger-item');
      items.forEach((item, idx) => {
        if (!item.style.getPropertyValue('--stagger-delay')) {
          item.style.setProperty('--stagger-delay', `${(idx * 0.1) + 0.04}s`);
        }
      });
    });

    requestAnimationFrame(() => {
      setTimeout(triggerHeroAnimation, 60);
    });
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
    const heroHeading = document.getElementById('hero-heading');
    if (heroHeading) heroHeading.classList.add('hero-loaded', 'revealed');
  }

  // Active desktop nav highlight
  const navSections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 180;
    navSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // ==========================================================================
  // 5. INTERACTIVE PATH PICKER ("Where Are You Right Now?")
  // ==========================================================================
  const pathData = {
    content: {
      code: "TS-2027",
      title: "Trending Socials (Content Day Retainer)",
      hook: "You have an assistant or coordinator who posts, but the visuals look amateur and don’t reflect the caliber of your aesthetic services.",
      deliverables: "1 dedicated on-location shoot day per month · 16 to 20 native high-conversion reels & still portraits · Audio trend spotting · Hook templates",
      timeline: "Monthly retainer · 3-month initial runway · Content delivered within 7 business days",
      ideal: "Med spas, master injectors, and high-volume estheticians who want scroll-stopping content without being glued to their phone.",
      serviceOption: "Trending Socials Retainer"
    },
    team: {
      code: "SMM-FULL",
      title: "Social Media Management (Full Agency Takeover)",
      hook: "You are an established clinic or salon owner completely ready to hand off strategy, filming, editing, daily publishing, and community engagement.",
      deliverables: "Complete editorial strategy · Bi-weekly production shoot days · Daily community management & consult routing · Monthly revenue reporting",
      timeline: "Ongoing partnership · 6-month recommended runway · Dedicated account director",
      ideal: "Multi-provider med spas and luxury salons generating $50K+/mo seeking high-touch executive delegation.",
      serviceOption: "Social Media Management"
    },
    shoot: {
      code: "PHOTO-EDT",
      title: "Brand Photography & Editorial Lookbook",
      hook: "You are rebranding, introducing new treatments or machines, launching a website rebuild, or seeking coverage in regional lifestyle press.",
      deliverables: "Full day studio and on-location production · 60+ fully retouched high-res campaign stills · Treatment protocol macro shots · Commercial licensing",
      timeline: "Single campaign engagement · 2-week turnaround · Shot list & mood board curation included",
      ideal: "Aesthetic practices wanting NYC-caliber magazine imagery that commands top-tier pricing.",
      serviceOption: "Brand Photography"
    },
    campaign: {
      code: "CAMP-LNCH",
      title: "High-Impact Launch / Expansion Campaign",
      hook: "You are opening a new location, adding a breakthrough laser device, or launching a seasonal treatment package that needs to be booked out immediately.",
      deliverables: "Multi-week promotional roadmap · Waitlist teaser reels & reveal assets · Local VIP creator & injector seeding · Paid social ad suite",
      timeline: "6 to 8-week structured sprint · Weekly sprint check-ins · Post-campaign revenue audit",
      ideal: "Clinics looking to generate $50K–$150K in upfront booking revenue during a 14-day window.",
      serviceOption: "Campaigns"
    }
  };

  const pathTabs = document.querySelectorAll('.path-tab-btn');
  const pathMatchCode = document.getElementById('pathMatchCode');
  const pathMatchTitle = document.getElementById('pathMatchTitle');
  const pathMatchHook = document.getElementById('pathMatchHook');
  const pathDeliverables = document.getElementById('pathDeliverables');
  const pathTimeline = document.getElementById('pathTimeline');
  const pathIdeal = document.getElementById('pathIdeal');
  const pathApplyBtn = document.getElementById('pathApplyBtn');
  const clientServiceSelect = document.getElementById('clientService');

  let currentSelectedPath = 'content';

  pathTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      pathTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const pathKey = tab.getAttribute('data-path');
      currentSelectedPath = pathKey;
      const data = pathData[pathKey];

      if (data && pathMatchTitle) {
        const cardDisplay = document.getElementById('pathCardDisplay');
        if (cardDisplay) {
          cardDisplay.style.opacity = '0.35';
          cardDisplay.style.transform = 'translateY(6px)';
        }

        setTimeout(() => {
          pathMatchCode.textContent = data.code;
          pathMatchTitle.textContent = data.title;
          pathMatchHook.textContent = data.hook;
          pathDeliverables.textContent = data.deliverables;
          pathTimeline.textContent = data.timeline;
          pathIdeal.textContent = data.ideal;

          if (cardDisplay) {
            cardDisplay.style.opacity = '1';
            cardDisplay.style.transform = 'translateY(0)';
          }
        }, 120);
      }
    });
  });

  // Pre-fill service in form when clicking Apply on path picker
  if (pathApplyBtn) {
    pathApplyBtn.addEventListener('click', (e) => {
      const data = pathData[currentSelectedPath];
      if (data && clientServiceSelect) {
        clientServiceSelect.value = data.serviceOption;
      }
    });
  }

  // Pre-fill from service card links
  const serviceCardLinks = document.querySelectorAll('.service-card-link');
  serviceCardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const prefill = link.getAttribute('data-prefill');
      if (prefill && clientServiceSelect) {
        clientServiceSelect.value = prefill;
      }
    });
  });

  // ==========================================================================
  // 6. ANIMATED STAT COUNTERS FOR PROOF BAND
  // ==========================================================================
  const counterElements = document.querySelectorAll('.counter-target');
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    counterElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;

      const duration = 1600;
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  };

  const proofBand = document.querySelector('.proof-band-section');
  if (proofBand && 'IntersectionObserver' in window) {
    const proofObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    }, { threshold: 0.2 });

    proofObserver.observe(proofBand);
  } else {
    animateCounters();
  }

  // ==========================================================================
  // 7. PORTFOLIO CATEGORY FILTERING & ARCHIVE DRAWER
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('#portfolioGrid .portfolio-item');
  const portfolioGrid = document.getElementById('portfolioGrid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      if (portfolioGrid) portfolioGrid.style.opacity = '0.4';

      setTimeout(() => {
        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterVal === 'all' || category === filterVal) {
            item.classList.remove('filtered-out');
            item.classList.add('revealed');
          } else {
            item.classList.add('filtered-out');
          }
        });
        if (portfolioGrid) portfolioGrid.style.opacity = '1';
      }, 150);
    });
  });

  // Archive Drawer Expansion
  const viewAllWorkBtn = document.getElementById('viewAllWorkBtn');
  const workArchiveDrawer = document.getElementById('workArchiveDrawer');

  if (viewAllWorkBtn && workArchiveDrawer) {
    viewAllWorkBtn.addEventListener('click', () => {
      const isOpen = workArchiveDrawer.classList.contains('open');
      const textSpan = viewAllWorkBtn.querySelector('.btn-text-state');
      const arrowIcon = viewAllWorkBtn.querySelector('.btn-arrow-icon');

      if (isOpen) {
        workArchiveDrawer.classList.remove('open');
        workArchiveDrawer.setAttribute('aria-hidden', 'true');
        viewAllWorkBtn.setAttribute('aria-expanded', 'false');
        if (textSpan) textSpan.textContent = 'View Additional Archive Work';
        if (arrowIcon) arrowIcon.innerHTML = '&darr;';
      } else {
        workArchiveDrawer.classList.add('open');
        workArchiveDrawer.setAttribute('aria-hidden', 'false');
        viewAllWorkBtn.setAttribute('aria-expanded', 'true');
        if (textSpan) textSpan.textContent = 'Close Additional Archive';
        if (arrowIcon) arrowIcon.innerHTML = '&uarr;';
      }
    });
  }

  // ==========================================================================
  // 8. CASE STUDY MODAL QUICK-VIEW
  // ==========================================================================
  const modal = document.getElementById('caseStudyModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const allPortfolioCards = document.querySelectorAll('.portfolio-item');

  const openModal = (id) => {
    const data = caseStudies[id];
    if (!data || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-hero-img-box lm-film-frame">
        <div class="film-edge-top">
          <span class="film-text">${data.client.toUpperCase()} &middot; ARCHIVE</span>
          <span class="film-frame-no">${data.year}</span>
        </div>
        <img src="${data.image}" alt="${data.client}" width="780" height="440">
      </div>
      <div class="modal-header-meta">
        <span class="modal-category">${data.category}</span>
        <span class="modal-year">${data.year}</span>
      </div>
      <h2 class="modal-title" id="modalTitle">${data.title}</h2>
      <p class="modal-summary">${data.summary}</p>

      <div class="modal-stats-grid">
        ${data.stats.map(s => `
          <div class="modal-stat-item">
            <div class="modal-stat-val">${s.val}</div>
            <div class="modal-stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <h4 class="modal-deliverables-title">WHAT WAS DELIVERED:</h4>
      <ul class="modal-deliverables-list">
        ${data.deliverables.map(d => `<li>&check; ${d}</li>`).join('')}
      </ul>

      <div class="modal-action-row">
        <a href="#contact" class="btn btn-primary btn-curled-shadow" id="modalInquireBtn">
          <span>Apply to Partner on Similar Project &nearr;</span>
        </a>
      </div>
    `;

    const inquireBtn = modalBody.querySelector('#modalInquireBtn');
    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        closeModal();
      });
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  allPortfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (id) openModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ==========================================================================
  // 9. BOSTON REAL-TIME STUDIO CLOCK (EST/EDT)
  // ==========================================================================
  const bostonClock = document.getElementById('bostonClock');

  const updateBostonClock = () => {
    if (!bostonClock) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      const timeStr = formatter.format(now);
      
      // Determine EST or EDT
      const tzString = now.toLocaleDateString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' });
      const tzName = tzString.split(' ').pop() || 'EST';

      bostonClock.textContent = `${timeStr} ${tzName}`;
    } catch (e) {
      bostonClock.textContent = '12:00:00 PM EST';
    }
  };

  updateBostonClock();
  setInterval(updateBostonClock, 1000);

  // Update current copyright year dynamically
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 10. INQUIRY FORM VALIDATION & SUBMISSION
  // ==========================================================================
  const inquiryForm = document.getElementById('inquiryForm');
  const nameInput = document.getElementById('clientName');
  const emailInput = document.getElementById('clientEmail');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitInquiryBtn');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameError.classList.remove('visible');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailError.classList.remove('visible');
      }

      if (!isValid) return;

      // Submitting State
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Transmitting Application...</span>';
      }

      // Simulate network request
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Application Received &check;</span>';
        }

        if (formFeedback) {
          formFeedback.className = 'form-feedback-message success';
          formFeedback.innerHTML = `
            <strong>Thank you for applying to Lucci Media.</strong><br>
            Our leadership team reviews every application within 24 business hours. If your brand is an alignment for our client roster, we will reach out directly with private strategy call booking links.
          `;
        }

        inquiryForm.reset();

        showToast("Application submitted successfully to Lucci Media.");
      }, 900);
    });
  }

  // Toast notice helper
  const toastNotice = document.getElementById('toastNotice');
  const showToast = (msg) => {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  };

  // ==========================================================================
  // 11. ACCESSIBLE SMOOTH SCROLLING & BACK TO TOP
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Footer Legal Modals / Toasts
  const privacyLink = document.getElementById('privacyLink');
  const termsLink = document.getElementById('termsLink');
  const creditsLink = document.getElementById('creditsLink');

  [privacyLink, termsLink, creditsLink].forEach(link => {
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showToast("Lucci Media Brand Kit & Legal policies are active for client contracts.");
      });
    }
  });

});
