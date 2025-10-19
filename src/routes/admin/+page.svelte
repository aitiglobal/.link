<script lang="ts">
  export let data: { content: any };
  export let form: any;
  const content = data.content || {};

  let meta = structuredClone(content?.meta ?? { title: '', description: '' });
  let nav = structuredClone(content?.nav ?? { home: '', services: '', contact: '' });
  let hero = structuredClone(content?.hero ?? { title: '' });
  let services = structuredClone(content?.services ?? { title: '', subtitle: '', pillars: [] });
  let contact = structuredClone(
    content?.contact ?? { title: '', body: '', emailEncoded: '', phoneParts: [] }
  );
  let footer = content?.footer || '';

  let phoneParts = (contact?.phoneParts ?? []).join(',');

  function addPillar() {
    services.pillars = [...(services.pillars || []), { title: '', icon: 'alert', cards: [] }];
  }
  function removePillar(i: number) {
    services.pillars = services.pillars.filter((_: any, idx: number) => idx !== i);
  }
  function addCard(i: number) {
    services.pillars[i].cards = [
      ...(services.pillars[i].cards || []),
      { title: '', target: '', objective: '', format: '' }
    ];
  }
  function removeCard(i: number, j: number) {
    services.pillars[i].cards = services.pillars[i].cards.filter((_: any, idx: number) => idx !== j);
  }
</script>

<svelte:head>
  <title>Admin - Edit Konten</title>
</svelte:head>

<main class="admin">
  <h1>Admin: Edit Konten</h1>

  {#if form?.success}
    <div class="alert success">Perubahan tersimpan.</div>
  {/if}

  <form method="POST" action="?/save" class="form">
    <fieldset>
      <legend>Meta</legend>
      <label>
        Title
        <input name="meta.title" type="text" bind:value={meta.title} />
      </label>
      <label>
        Description
        <textarea name="meta.description" rows="2" bind:value={meta.description}></textarea>
      </label>
    </fieldset>
    <fieldset>
      <legend>Navigasi</legend>
      <label>
        Home
        <input name="nav.home" type="text" bind:value={nav.home} />
      </label>
      <label>
        Layanan
        <input name="nav.services" type="text" bind:value={nav.services} />
      </label>
      <label>
        Kontak
        <input name="nav.contact" type="text" bind:value={nav.contact} />
      </label>
    </fieldset>

    <fieldset>
      <legend>Hero</legend>
      <label>
        Judul
        <input name="hero.title" type="text" bind:value={hero.title} />
      </label>
    </fieldset>

    <fieldset>
      <legend>Layanan</legend>
      <label>
        Judul
        <input name="services.title" type="text" bind:value={services.title} />
      </label>
      <label>
        Subjudul
        <textarea name="services.subtitle" rows="3" bind:value={services.subtitle}></textarea>
      </label>

      <div class="pillars">
        <h3>Pilar</h3>
        <button type="button" class="secondary" on:click={addPillar}>+ Tambah Pilar</button>

        {#each services.pillars || [] as p, i}
          <div class="pillar-item">
            <div class="row">
              <label>
                Judul Pilar
                <input type="text" bind:value={p.title} />
              </label>
              <label>
                Ikon (alert | users-check | star)
                <input type="text" bind:value={p.icon} />
              </label>
              <button type="button" class="danger" on:click={() => removePillar(i)}>Hapus Pilar</button>
            </div>

            <div class="cards">
              <h4>Kartu Layanan</h4>
              <button type="button" class="secondary" on:click={() => addCard(i)}>+ Tambah Kartu</button>
              {#each p.cards || [] as c, j}
                <div class="card-item">
                  <label>
                    Judul
                    <input type="text" bind:value={c.title} />
                  </label>
                  <label>
                    Target
                    <input type="text" bind:value={c.target} />
                  </label>
                  <label>
                    Tujuan/Objective
                    <textarea rows="2" bind:value={c.objective}></textarea>
                  </label>
                  <label>
                    Format
                    <input type="text" bind:value={c.format} />
                  </label>
                  <button type="button" class="danger" on:click={() => removeCard(i, j)}>Hapus Kartu</button>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <input type="hidden" name="services.pillarsJson" value={JSON.stringify(services.pillars || [])} />
    </fieldset>

    <fieldset>
      <legend>Kontak</legend>
      <label>
        Judul
        <input name="contact.title" type="text" bind:value={contact.title} />
      </label>
      <label>
        Deskripsi (gunakan \n untuk baris baru)
        <textarea name="contact.body" rows="3" bind:value={contact.body}></textarea>
      </label>
      <label>
        Email (base64-encoded)
        <input name="contact.emailEncoded" type="text" bind:value={contact.emailEncoded} />
      </label>
      <label>
        Nomor WhatsApp (parts dipisah koma)
        <input name="contact.phoneParts" type="text" bind:value={phoneParts} />
      </label>
    </fieldset>

    <fieldset>
      <legend>Footer</legend>
      <label>
        Teks Footer
        <textarea name="footer" rows="2" bind:value={footer}></textarea>
      </label>
    </fieldset>

    <div class="actions">
      <button type="submit">Simpan</button>
    </div>
  </form>
</main>

<style>
  .admin { max-width: 900px; margin: 40px auto; padding: 0 20px; font-family: system-ui, sans-serif; }
  h1 { font-size: 1.8rem; margin-bottom: 1rem; }
  .form { display: grid; gap: 24px; }
  fieldset { border: 1px solid #ddd; border-radius: 8px; padding: 16px; }
  legend { padding: 0 8px; font-weight: 700; }
  label { display: grid; gap: 6px; margin-bottom: 12px; }
  input[type="text"], textarea { padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; }
  textarea { resize: vertical; }
  .secondary { background: #EEE; color: #333; border: 1px solid #ccc; margin-left: 8px; }
  .danger { background: #C62828; color: white; border: none; margin-left: 8px; }
  .actions { display: flex; justify-content: flex-end; }
  button { background: #D32F2F; color: white; border: none; border-radius: 6px; padding: 10px 16px; font-weight: 700; cursor: pointer; }
  button:hover { background: #B71C1C; }
  .alert.success { background: #e6ffed; color: #036b26; border: 1px solid #b7ebc6; padding: 10px 12px; border-radius: 6px; margin-bottom: 12px; }
  .pillars { margin-top: 12px; display: grid; gap: 16px; }
  .pillar-item { border: 1px dashed #ddd; padding: 12px; border-radius: 8px; }
  .row { display: grid; grid-template-columns: 1fr 1fr auto; gap: 12px; align-items: end; }
  .cards { margin-top: 12px; display: grid; gap: 12px; }
  .card-item { border: 1px solid #eee; padding: 12px; border-radius: 8px; }
</style>
