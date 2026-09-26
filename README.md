# TSF — ToutSurLeFoot

V1 d'un journal digital football. La page utilise API-Football pour les matchs, le direct et les classements. API-Football couvre plus de 1 200 compétitions et fournit notamment fixtures, live scores, standings, joueurs et blessures.

## Déploiement Vercel
1. Mets ces fichiers dans un dépôt GitHub, par exemple `tout-sur-le-foot`.
2. Importe le dépôt dans Vercel.
3. Dans Settings → Environment Variables, ajoute `API_FOOTBALL_KEY` pour **Production**.
4. Redéploie.

La clé ne doit jamais être mise dans `app.js` ou `index.html`.
