/**
 * STUDIO SOCIAL — Creative Agency Homepage JavaScript
 * Strictly Vanilla ES6+ (No React, No jQuery, No Frameworks)
 * Handles:
 * - Mobile Navigation Toggle & Auto-close
 * - Sticky Header Scroll Detection
 * - IntersectionObserver Scroll Reveal Animations
 * - Portfolio Category Filtering
 * - Case Study Modal Quick-View & ESC handling
 * - "View All Work" Drawer Expansion
 * - Interactive Inquiry Form Validation & Submission
 * - Copenhagen Live Studio Clock
 * - Back-to-Top Button & Accessible Smooth Anchors
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. DATA: Case Studies for Modal Quick-View
  // ==========================================================================
  const caseStudies = {
    1: {
      client: "Lumen Skincare",
      title: "The Clean Light Campaign",
      category: "Beauty & Skincare • 360° Campaign",
      year: "2026",
      image: "assets/images/work-skincare.jpg",
      summary: "A high-fashion beauty launch spotlighting organic bio-retinol. We directed the visual identity, studio macro lighting, and a multi-tiered TikTok/Reels campaign designed to capture skin luminosity.",
      stats: [
        { val: "+14.2M", label: "Organic Impressions" },
        { val: "38%", label: "Conversion Lift" },
        { val: "4.9★", label: "Product Rating" }
      ],
      deliverables: ["Editorial Campaign Stills", "9:16 Short-Form Video Series", "Color Grading & Retouching", "Paid Ad Iteration Matrix"]
    },
    2: {
      client: "Maison Nord",
      title: "SS26 Copenhagen Run",
      category: "Fashion & Apparel • Lookbook & Reels",
      year: "2026",
      image: "assets/images/work-fashion.jpg",
      summary: "Sculptural outerwear captured against the stark brutalist architecture of Copenhagen. We combined 35mm film textures with high-energy digital fashion reels for Paris Fashion Week runway teasing.",
      stats: [
        { val: "6.8M", label: "Video Views" },
        { val: "94%", label: "Sold Out in 48h" },
        { val: "3.2x", label: "ROAS Increase" }
      ],
      deliverables: ["Spring Lookbook Direction", "Runway Video Teasers", "Creator Seeding Strategy", "Audio Concepting"]
    },
    3: {
      client: "Aura Botanicals",
      title: "Zero-Proof Elixirs",
      category: "Product Photography • Art Direction",
      year: "2025",
      image: "assets/images/work-botanical.jpg",
      summary: "A premium Scandinavian zero-proof apéritif. We produced dramatic chiaroscuro bottle photography celebrating tactile glass textures, liquid viscosity, and bespoke botanical silhouettes.",
      stats: [
        { val: "+220%", label: "D2C Revenue Growth" },
        { val: "18.4K", label: "Saves & Shares" },
        { val: "12", label: "Retail Stockists" }
      ],
      deliverables: ["Studio Tabletop Shoots", "Styling & Botanical Sourcing", "E-Commerce Grid Assets", "Instagram Grid Architecture"]
    },
    4: {
      client: "Velvet Archive",
      title: "Viral TikTok Launch",
      category: "Social Media Campaign • TikTok Strategy",
      year: "2026",
      image: "assets/images/work-social.jpg",
      summary: "Vintage luxury curation reimagined for Gen-Z collectors. We engineered rapid 1.2-second retention hooks, bespoke trending audio pairings, and an unfiltered behind-the-scenes aesthetic.",
      stats: [
        { val: "28.5M", label: "TikTok Views" },
        { val: "140K", label: "New Followers" },
        { val: "12.8%", label: "Engagement Rate" }
      ],
      deliverables: ["Hook-Optimization Testing", "Daily Social Publishing", "Micro-Influencer Strategy", "Interactive Poll Formats"]
    },
    5: {
      client: "Køben Ceramics",
      title: "Form & Tactility",
      category: "Creative Brand Visuals • Visual Identity",
      year: "2025",
      image: "assets/images/work-ceramics.jpg",
      summary: "Hand-thrown stoneware celebrating raw Nordic clay. We documented the physical craftsmanship process, establishing an earthy, meditative aesthetic rhythm across all digital touchpoints.",
      stats: [
        { val: "100%", label: "Batch 01 Sold" },
        { val: "4.2M", label: "Reels Reach" },
        { val: "45K", label: "Profile Visits" }
      ],
      deliverables: ["Artisan Documentary Film", "Warm Minimalist Stills", "Packaging Visuals", "Brand Manifesto Scripting"]
    },
    6: {
      client: "Séance Parfum",
      title: "Scent of Silence",
      category: "Luxury Beauty • Campaign Stills & Film",
      year: "2026",
      image: "assets/images/work-parfum.jpg",
      summary: "An enigmatic niche fragrance campaign built on shadows, smoke, and quiet luxury. We created cinematic micro-films and still life prints featured internationally in Vogue Scandinavia and Kinfolk.",
      stats: [
        { val: "8.1M", label: "High-Value Reach" },
        { val: "+310%", label: "Pre-Orders Lift" },
        { val: "Global", label: "Press Features" }
      ],
      deliverables: ["Cinematography & Sound", "Dark Editorial Photography", "Limited Edition Press Kit", "Interactive Landing Experience"]
    }
  };

  // ==========================================================================
  // 2. STICKY HEADER SCROLL DETECTION
  // ==========================================================================
  const header = document.getElementById('header');
  const scrollThreshold = 40;

  const handleHeaderScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Initial check

  // ==========================================================================
  // 3. MOBILE NAVIGATION TOGGLE & AUTO-CLOSE
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn');

  const openMobileNav = () => {
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
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

    // Close when clicking any nav link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
        mobileMenuBtn.focus();
      }
    });
  }

  // ==========================================================================
  // 4. INTERSECTION OBSERVER FOR SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-item');

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: reveal immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Active desktop nav link on scroll
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
  // 5. PORTFOLIO CATEGORY FILTERING
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const portfolioGrid = document.getElementById('portfolioGrid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Subtle fade effect on grid
      if (portfolioGrid) {
        portfolioGrid.style.opacity = '0.4';
      }

      setTimeout(() => {
        portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.classList.remove('filtered-out');
          } else {
            item.classList.add('filtered-out');
          }
        });

        if (portfolioGrid) {
          portfolioGrid.style.opacity = '1';
        }
      }, 150);
    });
  });

  // ==========================================================================
  // 6. CASE STUDY QUICK-VIEW MODAL
  // ==========================================================================
  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  const openCaseStudyModal = (studyId) => {
    const data = caseStudies[studyId];
    if (!data || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-media-wrap">
        <img src="${data.image}" alt="${data.client} - ${data.title}">
      </div>
      <div class="modal-header-meta">
        <span>${data.category}</span>
        <span>${data.year}</span>
      </div>
      <h2 class="modal-case-title" id="modalTitle">${data.client} — ${data.title}</h2>
      <p class="modal-case-desc">${data.summary}</p>
      
      <div class="modal-stats-grid">
        ${data.stats.map(s => `
          <div class="modal-stat-box">
            <span class="modal-stat-val">${s.val}</span>
            <span class="modal-stat-label">${s.label}</span>
          </div>
        `).join('')}
      </div>

      <div class="modal-deliverables-wrap">
        <span class="pillar-idx" style="display:block; margin-bottom: 0.5rem;">[ CORE DELIVERABLES ]</span>
        <ul style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
          ${data.deliverables.map(d => `
            <li class="service-pill" style="background: var(--bg-secondary);">${d}</li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-top: 2.5rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <a href="#contact" class="btn btn-primary modal-action-btn">Start Similar Project &nearr;</a>
        <span style="font-size: 0.85rem; color: var(--text-muted);">Confidential deck available under NDA</span>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook modal action button
    const actionBtn = modalBody.querySelector('.modal-action-btn');
    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        closeCaseStudyModal();
      });
    }
  };

  const closeCaseStudyModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach click to portfolio cards
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = item.getAttribute('data-index');
      openCaseStudyModal(idx);
    });

    // Make keyboard accessible (Enter / Space to open)
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View details for ${item.querySelector('.portfolio-title')?.textContent || 'project'}`);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = item.getAttribute('data-index');
        openCaseStudyModal(idx);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCaseStudyModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeCaseStudyModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeCaseStudyModal();
    }
  });

  // ==========================================================================
  // 7. "VIEW ALL WORK" EXPANDABLE ARCHIVE
  // ==========================================================================
  const viewAllWorkBtn = document.getElementById('viewAllWorkBtn');
  const workArchiveDrawer = document.getElementById('workArchiveDrawer');

  if (viewAllWorkBtn && workArchiveDrawer) {
    viewAllWorkBtn.addEventListener('click', () => {
      const isOpen = workArchiveDrawer.classList.contains('open');
      if (isOpen) {
        workArchiveDrawer.classList.remove('open');
        workArchiveDrawer.setAttribute('aria-hidden', 'true');
        viewAllWorkBtn.setAttribute('aria-expanded', 'false');
        viewAllWorkBtn.querySelector('.btn-text').textContent = 'VIEW ALL WORK';
      } else {
        workArchiveDrawer.classList.add('open');
        workArchiveDrawer.setAttribute('aria-hidden', 'false');
        viewAllWorkBtn.setAttribute('aria-expanded', 'true');
        viewAllWorkBtn.querySelector('.btn-text').textContent = 'COLLAPSE ARCHIVE';
        
        // Scroll smoothly to drawer
        setTimeout(() => {
          workArchiveDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 150);
      }
    });
  }

  // ==========================================================================
  // 8. INTERACTIVE INQUIRY FORM VALIDATION & SUBMISSION
  // ==========================================================================
  const inquiryForm = document.getElementById('inquiryForm');
  const nameInput = document.getElementById('clientName');
  const emailInput = document.getElementById('clientEmail');
  const formFeedback = document.getElementById('formFeedback');
  const toastNotice = document.getElementById('toastNotice');

  const showToast = (message) => {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add('active');
    setTimeout(() => {
      toastNotice.classList.remove('active');
    }, 4500);
  };

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const nameGroup = nameInput ? nameInput.closest('.form-group') : null;
      if (!nameVal || nameVal.length < 2) {
        if (nameGroup) nameGroup.classList.add('has-error');
        isValid = false;
      } else {
        if (nameGroup) nameGroup.classList.remove('has-error');
      }

      // Validate Email
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const emailGroup = emailInput ? emailInput.closest('.form-group') : null;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        if (emailGroup) emailGroup.classList.add('has-error');
        isValid = false;
      } else {
        if (emailGroup) emailGroup.classList.remove('has-error');
      }

      if (!isValid) return;

      // Simulate asynchronous luxury transmission
      const submitBtn = document.getElementById('submitInquiryBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>SENDING PROPOSAL REQUEST...</span>`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>LET'S MAKE IT HAPPEN &nearr;</span>`;
        }

        inquiryForm.reset();

        if (formFeedback) {
          formFeedback.className = 'form-feedback-message success';
          formFeedback.innerHTML = `
            <strong>TAK! YOUR INQUIRY HAS BEEN RECEIVED.</strong><br>
            A senior creative director will review your vision and reply within 24 business hours.
          `;
          formFeedback.style.display = 'block';
        }

        showToast("✓ Inquiry transmitted to Studio Social Copenhagen.");
      }, 1200);
    });

    // Clear errors on input
    [nameInput, emailInput].forEach(inp => {
      if (inp) {
        inp.addEventListener('input', () => {
          const grp = inp.closest('.form-group');
          if (grp) grp.classList.remove('has-error');
        });
      }
    });
  }

  // ==========================================================================
  // 9. COPENHAGEN LIVE STUDIO CLOCK
  // ==========================================================================
  const cphClock = document.getElementById('cphClock');
  const updateCopenhagenTime = () => {
    if (!cphClock) return;
    try {
      const now = new Date();
      // Format to Europe/Copenhagen time
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Copenhagen',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      cphClock.textContent = `${timeString} CET`;
    } catch {
      // Fallback
      cphClock.textContent = "12:00:00 CET";
    }
  };

  updateCopenhagenTime();
  setInterval(updateCopenhagenTime, 1000);

  // ==========================================================================
  // 10. CURRENT YEAR IN FOOTER
  // ==========================================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 11. BACK TO TOP BUTTON
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

  // Legal Links Placeholders
  ['privacyLink', 'termsLink', 'creditsLink'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        showToast("Documentation available upon direct client request.");
      });
    }
  });

  console.log("Studio Social — Experience Initialized. Copenhagen / Global.");
});

