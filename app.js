const DATE_WINDOW_START = new Date("2026-04-15T00:00:00");
const DATE_WINDOW_END = new Date("2026-07-15T23:59:59");

const homeCities = {
  raleigh: { label: "Raleigh, NC", lat: 35.7796, lon: -78.6382 },
  "san-jose": { label: "San Jose, CA", lat: 37.3382, lon: -121.8863 },
  nashville: { label: "Nashville, TN", lat: 36.1627, lon: -86.7816 },
};

const tournaments = [
  {
    name: "Carolina Classic",
    city: "Durham",
    state: "NC",
    lat: 35.994,
    lon: -78.8986,
    start: "2026-04-16",
    end: "2026-04-19",
    status: "Waitlist",
    format: "Open, 32-team bonspiel",
    summary:
      "Triangle Curling Club's signature spring bonspiel with a 3-game guarantee and all meals included.",
    sourceLabel: "Triangle Curling Club",
    sourceUrl: "https://trianglecurling.com/index.php/86-bonspiels/438-carolina-classic",
  },
  {
    name: "Spring Fling",
    city: "Oakland",
    state: "CA",
    lat: 37.8044,
    lon: -122.2712,
    start: "2026-04-24",
    end: "2026-04-26",
    status: "Open",
    format: "Over / Under bonspiel",
    summary:
      "Open-to-all Bay Area event that pairs experience levels, making it a friendly option for amateur teams.",
    sourceLabel: "San Francisco Bay Area Curling Club",
    sourceUrl: "https://bayareacurling.com/events/bonspiels",
  },
  {
    name: "Spring is in the Air Spiel",
    city: "Stateline",
    state: "NV",
    lat: 38.9616,
    lon: -119.9421,
    start: "2026-04-24",
    end: "2026-04-26",
    status: "Open",
    format: "Spring bonspiel",
    summary:
      "A Lake Tahoe late-season spiel that adds a mountain-trip feel if you want a weekend destination tournament.",
    sourceLabel: "Lake Tahoe Epic Curling",
    sourceUrl: "https://laketahoecurling.com/tournamentPage.php",
  },
  {
    name: "Rock'em, Sock'em One-Day Bonspiel",
    city: "Durham",
    state: "NC",
    lat: 35.994,
    lon: -78.8986,
    start: "2026-05-02",
    end: "2026-05-02",
    status: "Waitlist",
    format: "One-day pointspiel",
    summary:
      "Open to members and non-members with prior curling experience, with teams mixed to avoid veteran-heavy lineups.",
    sourceLabel: "Triangle Curling Club",
    sourceUrl: "https://trianglecurling.com/",
  },
  {
    name: "St. Paul Summerspiel",
    city: "St. Paul",
    state: "MN",
    lat: 44.9537,
    lon: -93.09,
    start: "2026-05-15",
    end: "2026-05-17",
    status: "Open",
    format: "Summer open bonspiel",
    summary:
      "Three-game guarantee with food and drinks throughout the weekend at one of the country's biggest curling clubs.",
    sourceLabel: "St. Paul Curling Club",
    sourceUrl: "https://stpaulcurlingclub.org/index.php/bonspiels/bonspiel",
  },
  {
    name: "RainbowSpiel",
    city: "Seattle",
    state: "WA",
    lat: 47.6062,
    lon: -122.3321,
    start: "2026-05-15",
    end: "2026-05-17",
    status: "Open",
    format: "Weekend bonspiel",
    summary:
      "Granite's May spiel is active on the club calendar and works well for curlers looking for a social travel event.",
    sourceLabel: "Granite Curling Club of Seattle",
    sourceUrl: "https://webportal.curlingseattle.org/bonspiels",
  },
  {
    name: 'YIACBWECYCIM ("The YAK")',
    city: "Worcester",
    state: "MA",
    lat: 42.2626,
    lon: -71.8023,
    start: "2026-05-16",
    end: "2026-05-16",
    status: "Open",
    format: "One-day event, all skill levels",
    summary:
      "A 32-team one-day event at Worcester Ice Center that explicitly welcomes every skill level, including first-timers.",
    sourceLabel: "Colonial Curling",
    sourceUrl: "https://www.colonialcurling.com/",
  },
  {
    name: "Silicon Valley Bonspiel",
    city: "Fremont",
    state: "CA",
    lat: 37.5483,
    lon: -121.9886,
    start: "2026-05-22",
    end: "2026-05-24",
    status: "Open",
    format: "Four-game guarantee, open format",
    summary:
      "A strong weekend option for West Coast travel, hosted at Sharks Ice in Fremont with open-format team play.",
    sourceLabel: "Silicon Valley Curling Club",
    sourceUrl: "https://siliconvalleycurling.com/product/silicon-valley-bonspiel-2026-team-registration",
  },
  {
    name: "The Ball Bonspiel",
    city: "Oakland",
    state: "CA",
    lat: 37.8044,
    lon: -122.2712,
    start: "2026-06-12",
    end: "2026-06-14",
    status: "Open",
    format: "Open, LGBTQ+ friendly weekend bonspiel",
    summary:
      "A festive Bay Area bonspiel open to LGBTQ+ curlers and allies, with individual or full-team registration available.",
    sourceLabel: "San Francisco Bay Area Curling Club",
    sourceUrl: "https://bayareacurling.com/the-ball-bonspiel",
  },
  {
    name: "Summer Spiel",
    city: "Seattle",
    state: "WA",
    lat: 47.6062,
    lon: -122.3321,
    start: "2026-06-19",
    end: "2026-06-21",
    status: "Open",
    format: "Summer weekend bonspiel",
    summary:
      "Granite's June summer spiel is one of the clearest dedicated-ice travel options still on the calendar before July.",
    sourceLabel: "Granite Curling Club of Seattle",
    sourceUrl: "https://webportal.curlingseattle.org/bonspiels",
  },
  {
    name: "Tahoe Cup VII",
    city: "Stateline",
    state: "NV",
    lat: 38.9616,
    lon: -119.9421,
    start: "2026-06-26",
    end: "2026-06-28",
    status: "Open",
    format: "Weekend bonspiel",
    summary:
      "A Lake Tahoe summer weekend event with registration already open, ideal if you want curling plus a destination trip.",
    sourceLabel: "Lake Tahoe Epic Curling",
    sourceUrl: "https://laketahoecurling.com/tournamentPage.php",
  },
];

const citySelect = document.querySelector("#city-select");
const list = document.querySelector("#tournament-list");
const selectedCityLabel = document.querySelector("#selected-city-label");
const summaryText = document.querySelector("#summary-text");

function isWithinWindow(startDate) {
  return startDate >= DATE_WINDOW_START && startDate <= DATE_WINDOW_END;
}

function formatDateRange(start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  const options = { month: "short", day: "numeric" };

  if (start === end) {
    return startDate.toLocaleDateString("en-US", options);
  }

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const startLabel = startDate.toLocaleDateString("en-US", options);
  const endLabel = endDate.toLocaleDateString(
    "en-US",
    sameMonth ? { day: "numeric" } : options,
  );

  return `${startLabel}-${endLabel}`;
}

function haversineMiles(a, b) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(h));
}

function fitCopy(distanceMiles) {
  if (distanceMiles < 60) {
    return "Closest option from your selected city and easy to treat as a low-stress weekend trip.";
  }
  if (distanceMiles < 450) {
    return "A manageable regional road trip or short flight for an amateur team.";
  }
  if (distanceMiles < 1100) {
    return "A medium-haul tournament trip that still feels realistic for a long weekend.";
  }
  return "Best for a bigger curling getaway if you want to make the tournament part of a travel weekend.";
}

function statusClass(status) {
  return `status status-${status.toLowerCase()}`;
}

function buildCard(tournament, index) {
  const card = document.createElement("article");
  card.className = "tournament-card";
  card.style.animationDelay = `${index * 60}ms`;

  card.innerHTML = `
    <div class="card-top">
      <div>
        <p class="eyebrow">${formatDateRange(tournament.start, tournament.end)}</p>
        <h3>${tournament.name}</h3>
      </div>
      <span class="${statusClass(tournament.status)}">${tournament.status}</span>
    </div>
    <div class="card-meta">
      <div class="meta-row">
        <span class="meta-label">Location</span>
        <strong>${tournament.city}, ${tournament.state}</strong>
      </div>
      <div class="meta-row">
        <span class="meta-label">Format</span>
        <strong>${tournament.format}</strong>
      </div>
      <div class="meta-row">
        <span class="meta-label">Distance</span>
        <strong>${Math.round(tournament.distanceMiles).toLocaleString()} miles</strong>
      </div>
    </div>
    <div class="card-bottom">
      <p class="fit-note">${fitCopy(tournament.distanceMiles)}</p>
      <p class="event-summary">${tournament.summary}</p>
      <a class="source-link" href="${tournament.sourceUrl}" target="_blank" rel="noreferrer">
        Source: ${tournament.sourceLabel}
      </a>
    </div>
  `;

  return card;
}

function render() {
  const selectedCity = homeCities[citySelect.value];
  const filtered = tournaments
    .filter((event) => isWithinWindow(new Date(`${event.start}T00:00:00`)))
    .map((event) => ({
      ...event,
      distanceMiles: haversineMiles(selectedCity, event),
    }))
    .sort((a, b) => {
      if (a.distanceMiles !== b.distanceMiles) {
        return a.distanceMiles - b.distanceMiles;
      }

      return new Date(a.start) - new Date(b.start);
    });

  selectedCityLabel.textContent = selectedCity.label;
  summaryText.textContent = `${filtered.length} upcoming tournaments found from ${selectedCity.label}. The list favors practical travel options first, but still includes a few bigger destination bonspiels if you want to make a weekend of it.`;

  list.innerHTML = "";
  filtered.forEach((tournament, index) => {
    list.appendChild(buildCard(tournament, index));
  });
}

citySelect.addEventListener("change", render);
render();
