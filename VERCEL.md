# Vercel environments (peccolehomes.com)

## Environments

- **Production** – Live site at `https://www.peccolehomes.com`. Deploys when code is pushed or merged to `main`. Use for final, user-facing changes.
- **Preview** – One URL per branch or PR (e.g. `peccolehomes-com-xxx.vercel.app`). Use for QA and sharing before merging. Triggered by pushes to a non-`main` branch or by opening a PR.
- **Local** – Develop on your machine with `npm run dev` or `vercel dev`. Pull env vars with `vercel link` then `vercel env pull` (populates `.env.local`; keep it gitignored).

## Workflow

- **To ship:** Merge to `main` (or push to `main`) so Vercel runs a production deploy.
- **To test before merge:** Push a branch and open a PR; use the Preview URL from the PR or Vercel dashboard.
- Use “Request indexing” in Google Search Console only for Production URLs, not Preview.

## Deployment URLs

- **Production:** Live site is at `https://www.peccolehomes.com`. Vercel may also expose a project URL like `peccolehomes-com-<scope>.vercel.app` for the latest production deployment.
- **Preview (from Git):** Each deployment gets a generated URL. Two useful types:
  - **Commit URL** – Points to that exact commit; does not change. In a GitHub PR: use **"View deployment"** to open it. Format: `<project>-<hash>-<scope>.vercel.app`.
  - **Branch URL** – Always shows the latest deploy for that branch; updates when you push. In a GitHub PR: use **"Visit Preview"** in the PR comment. Format: `<project>-git-<branch>-<scope>.vercel.app`.
- **CLI:** After `vercel` or `vercel --prod`, the deploy URL is printed in the terminal.

For full details (truncation, anti-phishing, custom preview suffix), see [Vercel: Accessing Deployments through Generated URLs](https://vercel.com/docs/deployments/accessing-deployments-through-generated-urls).

| Location | Purpose |
|----------|---------|
| PR "View deployment" | Commit-specific preview URL |
| PR "Visit Preview" | Branch-specific preview URL (latest on branch) |
| Dashboard → Deployments | Any deployment URL |
| Terminal after `vercel` | URL for that deploy |

## Environment variables

Set in Vercel Dashboard → Project → Settings → Environment Variables. See [.env.example](.env.example) for the list of optional vars.

- **Production:** Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (and optionally `NEXT_PUBLIC_REALSCOUT_AGENT_ID`) scoped to **Production** so the live site has the correct GSC meta tag and RealScout agent.
- **Preview:** Either leave these unset (previews use defaults from [lib/site.ts](lib/site.ts)) or add the same vars for Preview if you want GSC/RealScout behavior on preview URLs.
- **Local:** After `vercel env pull`, `.env.local` contains vars for the selected environment (e.g. Production). Use Local only for running the app; do not commit `.env.local`.

For creating and editing variables, see [Vercel: Environment Variables](https://vercel.com/docs/projects/environment-variables).

## Summary

| Environment | When it's used        | Typical URL / trigger              |
|-------------|------------------------|------------------------------------|
| Production  | Live site              | Push/merge to `main` → www         |
| Preview     | Test before merge      | PR or non-main branch → *.vercel.app |
| Local       | Development on machine | `vercel dev` or `npm run dev`       |
