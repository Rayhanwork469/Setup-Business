// Business Setup Application JavaScript

// Application Data
const businessData = {
  "businessGuides": [
    {
      "title": "100% Foreign Ownership Bahrain",
      "description": "🚀 Kick-start your journey in 100% Foreign Ownership Bahrain? This guide gives you company registration! Start today with our simple process!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/100-foreign-ownership-bahrain.md",
      "category": "Company Formation",
      "location": "Bahrain"
    },
    {
      "title": "Bahrain Business Setup Cost",
      "description": "✨ Dive into the business world of Bahrain Business Setup Cost? Get the step-by-step process for business formation! Take the leap with our clear instructions!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/bahrain-business-setup-cost.md",
      "category": "Legal Compliance",
      "location": "Bahrain"
    },
    {
      "title": "Company Registration in Bahrain",
      "description": "🌍 Looking to grow your business in Company Registration In Bahrain? Get the step-by-step process for company setup! Take the leap with our simple process!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/company-registration-in-bahrain.md",
      "category": "Company Formation",
      "location": "Bahrain"
    },
    {
      "title": "Bahrain Investor Visa Guide",
      "description": "🌍 Looking to grow your business in Bahrain Investor Visa Guide? Unlock the secrets to company registration! Step into success with our simple process!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/bahrain-investor-visa-guide.md",
      "category": "Visa & Immigration",
      "location": "Bahrain"
    },
    {
      "title": "Company Formation in Manama",
      "description": "✨ Dive into the business world of Company Formation In Manama Bahrain A Comprehensive Guide? Unlock the secrets to business formation!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/company-formation-in-manama-bahrain-a-comprehensive-guide.md",
      "category": "Company Formation",
      "location": "Manama"
    },
    {
      "title": "Business Setup in Financial Harbour",
      "description": "🌍 Looking to grow your business in Setting Up Business In Financial Harbour Bahrain? Get the step-by-step process for company registration!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/setting-up-business-in-financial-harbour-bahrain.md",
      "category": "Company Formation",
      "location": "Financial Harbour"
    },
    {
      "title": "Investment Wharf Opportunities",
      "description": "🚀 Kick-start your journey in Unlocking Opportunities At Investment Wharf Bahrain? Get the step-by-step process for company setup!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/unlocking-opportunities-at-investment-wharf-bahrain.md",
      "category": "Company Formation",
      "location": "Investment Wharf"
    },
    {
      "title": "Company Formation in Riffa",
      "description": "🌍 Looking to grow your business in Setting Up A Company In Riffa Bahrain? Unlock the secrets to company setup!",
      "url": "https://github.com/Rayhanwork469/Setup-Business/blob/main/Posts/setting-up-a-company-in-riffa-bahrain.md",
      "category": "Company Formation",
      "location": "Riffa"
    }
  ],
  "locations": ["Manama", "Riffa", "Muharraq", "Financial Harbour", "Investment Wharf", "Bahrain Bay", "Diplomatic Area", "Hidd Industrial Area"],
  "categories": ["Company Formation", "Legal Compliance", "Visa & Immigration", "Startup Services"],
  "features": [
    "100% Foreign Ownership",
    "Fast Registration Process", 
    "Professional Support",
    "Complete Legal Compliance",
    "Investor Visa Assistance"
  ]
};

// Application State
let filteredGuides = [...businessData.businessGuides];
let currentFilters = {
  search: '',
  category: '',
  location: ''
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const locationFilter = document.getElementById('locationFilter');
const guidesContainer = document.getElementById('guidesContainer');
const locationsContainer = document.getElementById('locationsContainer');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');

// Location descriptions for enhanced presentation
const locationDescriptions = {
  'Manama': 'The capital and commercial hub of Bahrain, ideal for financial services and corporate headquarters.',
  'Riffa': 'A growing business district with modern infrastructure and excellent connectivity.',
  'Muharraq': 'Historic commercial center with strategic location near the international airport.',
  'Financial Harbour': 'Premier financial district with world-class infrastructure and international business facilities.',
  'Investment Wharf': 'Specialized investment zone with favorable business conditions and modern amenities.',
  'Bahrain Bay': 'Prestigious waterfront development with luxury business facilities and premium office spaces.',
  'Diplomatic Area': 'International business hub with government offices and diplomatic facilities.',
  'Hidd Industrial Area': 'Industrial zone with manufacturing facilities and strategic logistics advantages.'
};

// Location icons for visual enhancement
const locationIcons = {
  'Manama': 'bi-building-fill',
  'Riffa': 'bi-buildings',
  'Muharraq': 'bi-airplane',
  'Financial Harbour': 'bi-bank2',
  'Investment Wharf': 'bi-graph-up-arrow',
  'Bahrain Bay': 'bi-water',
  'Diplomatic Area': 'bi-globe-americas',
  'Hidd Industrial Area': 'bi-gear-fill'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  populateFilters();
  renderGuides();
  renderLocations();
  updateResultCount();
  
  // Add smooth scrolling animation to elements
  animateOnScroll();
});

// Initialize App
function initializeApp() {
  console.log('Bahrain Business Setup App initialized');
  
  // Add loading animation
  if (guidesContainer) {
    guidesContainer.classList.add('loading');
    setTimeout(() => {
      guidesContainer.classList.remove('loading');
    }, 500);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', debounce(handleSearch, 300));
  }
  
  // Filter functionality
  if (categoryFilter) {
    categoryFilter.addEventListener('change', handleCategoryFilter);
  }
  
  if (locationFilter) {
    locationFilter.addEventListener('change', handleLocationFilter);
  }
  
  // Smooth scrolling for navigation
  setupSmoothScrolling();
  
  // Mobile menu handling
  setupMobileMenu();
  
  // Add scroll effect to navbar
  setupNavbarScroll();
}

// Populate Filter Options
function populateFilters() {
  // Populate categories
  if (categoryFilter) {
    businessData.categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }
  
  // Populate locations
  if (locationFilter) {
    businessData.locations.forEach(location => {
      const option = document.createElement('option');
      option.value = location;
      option.textContent = location;
      locationFilter.appendChild(option);
    });
  }
}

// Handle Search
function handleSearch(event) {
  currentFilters.search = event.target.value.toLowerCase();
  applyFilters();
}

// Handle Category Filter
function handleCategoryFilter(event) {
  currentFilters.category = event.target.value;
  applyFilters();
}

// Handle Location Filter
function handleLocationFilter(event) {
  currentFilters.location = event.target.value;
  applyFilters();
}

// Apply Filters
function applyFilters() {
  filteredGuides = businessData.businessGuides.filter(guide => {
    const matchesSearch = !currentFilters.search || 
      guide.title.toLowerCase().includes(currentFilters.search) ||
      guide.description.toLowerCase().includes(currentFilters.search);
    
    const matchesCategory = !currentFilters.category || 
      guide.category === currentFilters.category;
    
    const matchesLocation = !currentFilters.location || 
      guide.location === currentFilters.location;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });
  
  renderGuides();
  updateResultCount();
}

// Render Guides
function renderGuides() {
  if (!guidesContainer) return;
  
  guidesContainer.innerHTML = '';
  
  if (filteredGuides.length === 0) {
    if (noResults) {
      noResults.style.display = 'block';
    }
    return;
  }
  
  if (noResults) {
    noResults.style.display = 'none';
  }
  
  filteredGuides.forEach((guide, index) => {
    const guideCard = createGuideCard(guide, index);
    guidesContainer.appendChild(guideCard);
  });
  
  // Add animation delay for staggered effect
  const cards = guidesContainer.querySelectorAll('.guide-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in-up');
  });
}

// Create Guide Card
function createGuideCard(guide, index) {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6 mb-4';
  
  col.innerHTML = `
    <div class="card guide-card h-100">
      <div class="card-body p-4">
        <div class="d-flex align-items-center mb-3">
          <span class="category-badge me-2">${guide.category}</span>
          <span class="location-badge">${guide.location}</span>
        </div>
        <h5 class="guide-title">${guide.title}</h5>
        <p class="guide-description">${cleanDescription(guide.description)}</p>
        <div class="mt-auto">
          <a href="${guide.url}" target="_blank" class="btn btn-primary btn-sm w-100">
            <i class="bi bi-book me-2"></i>
            Read Guide
            <i class="bi bi-arrow-up-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  `;
  
  return col;
}

// Render Locations
function renderLocations() {
  if (!locationsContainer) return;
  
  // Get unique locations from guides with counts
  const locationCounts = {};
  businessData.businessGuides.forEach(guide => {
    locationCounts[guide.location] = (locationCounts[guide.location] || 0) + 1;
  });
  
  // Render location cards
  businessData.locations.slice(0, 6).forEach(location => {
    const count = locationCounts[location] || 0;
    const locationCard = createLocationCard(location, count);
    locationsContainer.appendChild(locationCard);
  });
}

// Create Location Card
function createLocationCard(location, count) {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6 mb-4';
  
  const icon = locationIcons[location] || 'bi-geo-alt-fill';
  const description = locationDescriptions[location] || 'Prime business location with excellent opportunities.';
  
  col.innerHTML = `
    <div class="card location-card h-100">
      <div class="card-body p-4 text-center">
        <div class="location-icon mb-3">
          <i class="${icon}"></i>
        </div>
        <h5 class="fw-bold mb-2">${location}</h5>
        <div class="badge bg-primary mb-3">${count} Guides Available</div>
        <p class="text-muted small mb-3">${description}</p>
        <button class="btn btn-outline-primary btn-sm" onclick="filterByLocation('${location}')">
          <i class="bi bi-arrow-right me-1"></i>
          Explore Location
        </button>
      </div>
    </div>
  `;
  
  return col;
}

// Filter by Location
function filterByLocation(location) {
  if (locationFilter) {
    locationFilter.value = location;
    currentFilters.location = location;
    applyFilters();
    scrollToSection('guides');
  }
}

// Update Result Count
function updateResultCount() {
  if (resultCount) {
    resultCount.textContent = filteredGuides.length;
  }
}

// Clean Description (remove emojis and excessive formatting)
function cleanDescription(description) {
  return description
    .replace(/[🚀✨🌍📈🌟]/g, '')
    .replace(/\?\s+/g, '. ')
    .substring(0, 120) + '...';
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Scroll to Section Helper
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Mobile Menu Setup
function setupMobileMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    // Close mobile menu when clicking on nav links
    navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }
}

// Navbar Scroll Effect
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  });
}

// Animate on Scroll
function animateOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('.card, .hero-content, .service-card').forEach(el => {
    observer.observe(el);
  });
}

// Debounce Function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility Functions for Global Access
window.scrollToSection = scrollToSection;
window.filterByLocation = filterByLocation;

// Analytics & Performance
function trackUserInteraction(action, category = 'User Interaction') {
  console.log(`Analytics: ${category} - ${action}`);
  // Here you would integrate with Google Analytics or other analytics services
}

// Track search interactions
if (searchInput) {
  searchInput.addEventListener('focus', () => trackUserInteraction('Search Focus'));
}

// Track filter usage
if (categoryFilter) {
  categoryFilter.addEventListener('change', () => trackUserInteraction('Category Filter Used'));
}

if (locationFilter) {
  locationFilter.addEventListener('change', () => trackUserInteraction('Location Filter Used'));
}

// Error Handling
window.addEventListener('error', function(e) {
  console.error('Application Error:', e.error);
  // You could send this to an error reporting service
});

// Performance Monitoring
window.addEventListener('load', function() {
  console.log('App loaded in:', performance.now(), 'ms');
});

console.log('Bahrain Business Setup App - JavaScript Loaded Successfully');