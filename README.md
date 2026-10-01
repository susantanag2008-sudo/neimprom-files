# Neimprom public assets & Neon Focus website

The existing `neon-focus/models/v1/` mirror and its licenses are preserved. Website files contain only public copy, an existing app icon and static HTML/CSS/JS. Never add credentials, private application source, billing records or personal data here.

## Website

- `/index.html` — compact product landing page
- `/style.css`, `/script.js` — responsive styles and local appearance switch
- `/assets/logo.png` — existing Neon Focus icon
- `/privacy-policy/`, `/terms/`, `/support/` — legal and support pages
- `/CNAME`, `/.nojekyll`, `/robots.txt`, `/sitemap.xml`

No framework, build command, external fonts, analytics or payment backend. Serve locally with `python -m http.server 8765 --bind 127.0.0.1`.

## GitHub Pages deployment

1. Push these public website files to `susantanag2008-sudo/neimprom-files`, branch `main`.
2. Repository Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
3. Set Custom domain to `neonfocus.neimprom.com` before adding the DNS record.
4. Enable Enforce HTTPS when the certificate is available. Certificate/DNS provisioning may take time.
5. Verify HTTPS on `/`, `/privacy-policy/`, `/terms/`, `/support/` and the icon/CSS/JS.

## GoDaddy DNS steps I must do manually

Use these steps if repeating or repairing the automated setup. Select **neimprom.com** (the actual domain confirmed in the account).

Type: CNAME | Name: neonfocus | Value: susantanag2008-sudo.github.io | TTL: Default

Do not include the repository name or https:// in the target. If an A/AAAA/CNAME already occupies the exact `neonfocus` name, inspect it and resolve only that conflicting record. Do not alter apex, www, MX or unrelated records. Check with `Resolve-DnsName neonfocus.neimprom.com`.

## Before the Google Play launch

This site describes review build 1.29 and explicitly labels billing/trials as planned. Replace the Coming to Google Play label with the verified official listing link only when published. Do not advertise previews as released features. Update policy before activating billing with actual backend retention/deletion operations and provider setup. Owner should review legal wording, developer identity/contact, target audience, permissions and refund policy against the final release. A website does not guarantee store approval.

Public contact: neonfocuscore@gmail.com. No fake store URL or support placeholders remain. ₹599 reference pricing is deliberately not on the website; the owner's requested reference is limited to the in-app offer card.
