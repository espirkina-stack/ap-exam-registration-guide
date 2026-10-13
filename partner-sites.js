// Give the six CGA / C&T partner sites their own group within the USA directory.
(() => {
  const country = document.querySelector('#united-states');
  const allCards = country?.querySelector('.cards');
  if (!allCards) return;

  const entries = window.AP_CENTRES.filter(centre => centre.country === 'United States');
  const partnerCards = entries.flatMap((centre, index) => {
    if (!centre.partnerSite || !allCards.children[index]) return [];
    const card = allCards.children[index];
    card.classList.add('partner-card');
    card.querySelector('.city')?.insertAdjacentHTML('beforebegin', '<span class="partner-badge">CGA partner site</span>');
    card.querySelector('h4')?.insertAdjacentHTML('afterend',
      `<p class="partner-facts"><strong>${centre.fee}</strong><br>Register by <strong>${centre.deadline}</strong></p>`);
    return [card];
  });
  if (!partnerCards.length) return;

  const group = document.createElement('div');
  group.className = 'partner-group';
  group.innerHTML = `<div class="partner-group-heading">
    <p class="partner-kicker">New for May 2027 · CGA partner sites</p>
    <h4>AP exams through C&amp;T Education</h4>
    <p>Choose a city and confirm that it offers your subjects. Complete the registration form, then email
      <a href="mailto:cherry@cteducationusa.com?cc=exams@cga.school">cherry@cteducationusa.com</a>
      with your name, subjects and preferred site, copying <a href="mailto:exams@cga.school">exams@cga.school</a>.
      C&amp;T collects the non-refundable fee and sends an AP Exam Only Join Code after payment.
      The host school's exact address is supplied after registration.</p>
  </div><div class="cards partner-cards"></div>`;
  const grid = group.querySelector('.partner-cards');
  partnerCards.forEach(card => grid.append(card));
  allCards.before(group);
  allCards.insertAdjacentHTML('beforebegin', '<h4 class="other-centres-heading">Other United States options</h4>');

  document.head.insertAdjacentHTML('beforeend', `<style>
    .partner-group{background:#f6f0ee;border:1px solid #e7d5d4;border-radius:16px;padding:24px;margin:16px 0 34px}
    .partner-group-heading{background:linear-gradient(110deg,#aa1720,#61000d);color:#fff;border-radius:12px;padding:22px 24px;margin-bottom:18px}
    .partner-kicker{color:#ffd13b;text-transform:uppercase;letter-spacing:.1em;font-size:12px;font-weight:bold;margin:0 0 7px}
    .partner-group-heading h4{font-size:24px;line-height:1.2;margin:0 0 10px}
    .partner-group-heading p:last-child{margin:0;font-size:14px;line-height:1.55}
    .partner-group-heading a{color:#fff;text-decoration:underline;text-underline-offset:2px}
    .partner-card{border-color:#e5c8c9;border-top:4px solid #a80920}
    .partner-badge{align-self:flex-start;background:#fff0c2;color:#740018;border-radius:999px;padding:3px 9px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px}
    .partner-card .city{color:#8f001b}
    .partner-facts{font-size:14px;color:#740018;margin:0 0 12px;line-height:1.45}
    .other-centres-heading{font-size:18px;margin:0 0 14px}
    @media(max-width:480px){.partner-group{padding:14px}.partner-group-heading{padding:18px}}
  </style>`);
})();
