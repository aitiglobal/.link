<script lang="ts">
  import { onMount } from 'svelte';
  export let data: { content: any };

  const encodedEmail = data.content.contact.emailEncoded as string;
  const phoneParts = data.content.contact.phoneParts as string[];
  const phoneNumber = phoneParts.join('');
  const waUrl = 'https://wa.me/' + phoneNumber;
  const email = atob(encodedEmail);
  const phoneDisplay = '+' + phoneParts.join(' ');

  let showScroll = false;


  function handleScroll() {
    showScroll = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });
</script>

<svelte:head>
  <title>{data.content.meta?.title || 'PT AITI GLOBAL NEXUS'}</title>
  <meta name="description" content={data.content.meta?.description || ''} />
</svelte:head>

<header class="main-header">
  <a href="#home" class="logo" aria-label="Beranda">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 6000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,6000) scale(0.1,-0.1)" stroke="none"><path d="M25259 38520 c-2604 -4020 -4737 -7310 -4740 -7310 -3 0 -678 834 -1500 1853 l-1494 1853 -7 -646 c-9 -755 -62 -12310 -56 -12314 1 -1 2823 -1986 6270 -4410 l6268 -4407 147 103 c174 122 12386 8710 12391 8714 6 4 -47 11573 -56 12319 l-7 641 -1494 -1853 c-822 -1019 -1497 -1853 -1500 -1853 -3 0 -2136 3290 -4740 7310 -2603 4021 -4737 7310 -4741 7310 -4 0 -2138 -3289 -4741 -7310z m9066 -4088 l4315 -5634 0 -838 0 -839 -4314 -3025 c-2373 -1664 -4319 -3026 -4326 -3026 -7 0 -1953 1362 -4326 3026 l-4314 3025 0 839 0 838 4317 5636 c2374 3100 4321 5635 4325 5634 4 -2 1950 -2538 4323 -5636z m1225 -10883 l5550 3750 -2 -2551 -3 -2550 -2755 -1887 -2755 -1886 -3 50 c-1 27 -16 700 -32 1493 -16 794 -30 1445 -32 1447 -2 2 -1244 -779 -2761 -1735 l-2757 -1739 -2757 1739 c-1517 956 -2759 1737 -2761 1735 -3 -3 -61 -2758 -62 -2922 l0 -71 -2757 1888 -2758 1888 -3 2550 -2 2551 5550 -3750 5550 -3750 5550 3750z"/></g></svg>
  </a>
  <nav class="main-nav">
    <a href="#home">{data.content.nav.home}</a>
    <a href="#layanan">{data.content.nav.services}</a>
    <a href="#kontak">{data.content.nav.contact}</a>
  </nav>
</header>

<main>
  <!-- SECTION 1: HERO -->
  <section id="home">
    <div class="logo-container">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 6000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,6000) scale(0.1,-0.1)" stroke="none"><path d="M25259 38520 c-2604 -4020 -4737 -7310 -4740 -7310 -3 0 -678 834 -1500 1853 l-1494 1853 -7 -646 c-9 -755 -62 -12310 -56 -12314 1 -1 2823 -1986 6270 -4410 l6268 -4407 147 103 c174 122 12386 8710 12391 8714 6 4 -47 11573 -56 12319 l-7 641 -1494 -1853 c-822 -1019 -1497 -1853 -1500 -1853 -3 0 -2136 3290 -4740 7310 -2603 4021 -4737 7310 -4741 7310 -4 0 -2138 -3289 -4741 -7310z m9066 -4088 l4315 -5634 0 -838 0 -839 -4314 -3025 c-2373 -1664 -4319 -3026 -4326 -3026 -7 0 -1953 1362 -4326 3026 l-4314 3025 0 839 0 838 4317 5636 c2374 3100 4321 5635 4325 5634 4 -2 1950 -2538 4323 -5636z m1225 -10883 l5550 3750 -2 -2551 -3 -2550 -2755 -1887 -2755 -1886 -3 50 c-1 27 -16 700 -32 1493 -16 794 -30 1445 -32 1447 -2 2 -1244 -779 -2761 -1735 l-2757 -1739 -2757 1739 c-1517 956 -2759 1737 -2761 1735 -3 -3 -61 -2758 -62 -2922 l0 -71 -2757 1888 -2758 1888 -3 2550 -2 2551 5550 -3750 5550 -3750 5550 3750z"/></g></svg>
      <h1>{data.content.hero.title}</h1>
    </div>
  </section>

  <!-- SECTION 2: SERVICES CATALOG -->
  <section id="layanan">
    <div class="container">
      <h2 class="page-title">{data.content.services.title}</h2>
      <p class="page-subtitle">{data.content.services.subtitle}</p>

      {#each data.content.services.pillars ?? [] as pillar}
        <div class="pillar-section">
          <div class="pillar-header">
            {#if pillar.icon === 'alert'}
              <svg class="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            {:else if pillar.icon === 'users-check'}
              <svg class="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
            {:else if pillar.icon === 'star'}
              <svg class="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            {:else}
              <svg class="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
            {/if}
            <h2>{pillar.title}</h2>
          </div>
          <div class="service-grid">
            {#each pillar.cards ?? [] as card}
              <div class="service-card">
                <div class="service-card-content">
                  <h3>{card.title}</h3>
                  {#if card.target}<p class="target">Target: {card.target}</p>{/if}
                  {#if card.objective}<p class="objective">{card.objective}</p>{/if}
                  {#if card.format}<p class="format">Format: {card.format}</p>{/if}
                </div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" class="cta-button">Pelajari Lebih Lanjut</a>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- SECTION 3: CONTACT -->
  <section id="kontak">
    <div class="container">
      <h2>{data.content.contact.title}</h2>
      <p>{@html data.content.contact.body.replace(/\n/g, '<br>')}</p>
      <p>Email: <a href={'mailto:' + email} target="_blank" rel="noopener noreferrer">{email}</a> | WhatsApp: <a href={waUrl} target="_blank" rel="noopener noreferrer">{phoneDisplay}</a></p>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p>{data.content.footer}</p>
  </div>
</footer>

<a href="#home" id="scrollToTopBtn" title="Kembali ke atas" style:display={showScroll ? 'block' : 'none'}>&#8679;</a>

<style>
  :global(html) { scroll-behavior: smooth; scroll-padding-top: 80px; }
  :global(body) { font-family: 'Roboto', sans-serif; background-color: #f4f4f9; margin: 0; color: #333; }
  .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 20px; }
  .main-header { background-color: #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 10px 5%; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000; flex-wrap: wrap; gap: 10px; }
  .main-header .logo { flex-shrink: 0; }
  .main-header .logo svg { width: 50px; height: auto; fill: #D32F2F; }
  .main-nav { flex-grow: 1; text-align: right; }
  .main-nav a { font-family: 'Montserrat', sans-serif; text-decoration: none; color: #333; margin-left: 25px; font-weight: 700; transition: color 0.3s ease; }
  .main-nav a:hover { color: #D32F2F; }
  @media (max-width: 420px) {
    .main-header { justify-content: center; }
    .main-nav { text-align: center; width: 100%; }
    .main-nav a { margin: 0 10px; }
  }
  #home { min-height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; background-color: #f4f4f9; padding-top: 80px; }
  #home .logo-container svg { width: 150px; height: auto; fill: #D32F2F; }
  #home .logo-container h1 { font-family: 'Montserrat', sans-serif; font-size: 2.5em; font-weight: 700; margin-top: 20px; letter-spacing: 1px; }
  #layanan { padding: 60px 0; }
  .page-title { text-align: center; font-family: 'Montserrat', sans-serif; font-size: 2.5em; margin-bottom: 10px; }
  .page-subtitle { text-align: center; font-size: 1.1em; color: #666; margin-bottom: 60px; max-width: 700px; margin-left: auto; margin-right: auto; }
  .pillar-section { margin-bottom: 60px; }
  .pillar-header { display: flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto 30px auto; border-bottom: 2px solid #D32F2F; padding-bottom: 10px; width: fit-content; max-width: 100%; }
  .pillar-icon { width: 40px; height: 40px; fill: #D32F2F; flex-shrink: 0; }
  .pillar-header h2 { font-family: 'Montserrat', sans-serif; font-size: 1.8em; margin: 0; text-align: center; }
  .service-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; }
  .service-card { background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border: 1px solid #eee; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; width: 340px; max-width: 100%; }
  .service-card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
  .service-card-content { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; }
  .service-card h3 { font-family: 'Montserrat', sans-serif; font-size: 1.4em; margin-top: 0; margin-bottom: 15px; }
  .service-card .target { font-weight: 700; color: #D32F2F; margin-bottom: 15px; }
  .service-card .objective { margin-bottom: 15px; line-height: 1.6; flex-grow: 1; }
  .service-card .format { font-style: italic; color: #555; }
  .cta-button { display: block; width: auto; padding: 12px 25px; margin: 25px; border: 2px solid #D32F2F; background-color: transparent; color: #D32F2F; font-family: 'Montserrat', sans-serif; font-size: 1em; font-weight: 700; border-radius: 5px; cursor: pointer; text-align: center; text-decoration: none; transition: background-color 0.3s ease, color 0.3s ease; }
  .cta-button:hover { background-color: #D32F2F; color: white; }
  #kontak { background-color: #333; color: #fff; padding: 60px 0; text-align: center; }
  #kontak h2 { font-family: 'Montserrat', sans-serif; font-size: 2em; }
  #kontak p { font-size: 1.1em; line-height: 1.7; }
  #kontak a { color: #D32F2F; text-decoration: none; font-weight: 700; }
  #kontak a:hover { text-decoration: underline; }
  footer { text-align: center; padding: 20px; background-color: #e9e9f3; }
  #scrollToTopBtn { display: none; position: fixed; bottom: 20px; right: 30px; z-index: 99; border: none; outline: none; background-color: #D32F2F; color: white; cursor: pointer; padding: 0; border-radius: 50%; width: 45px; height: 45px; font-size: 24px; line-height: 45px; text-align: center; text-decoration: none; transition: background-color 0.3s, opacity 0.4s; }
  #scrollToTopBtn:hover { background-color: #B71C1C; }
</style>
