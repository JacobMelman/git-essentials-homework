# Git Essentials homework

This Playwright project demonstrates reading login cases from JSON and records the Git workflow from the assignment. The valid case uses the public Toolshop demo account listed in the earlier Day 5 assignment. The failure case uses an unregistered example address to avoid submitting a wrong password repeatedly for the shared public account.

The attached Git Essentials materials teach how to configure Git, initialize a repository, use `.gitignore`, make commits on `feature/git_task`, merge that branch into `main`, and publish to a public GitHub repository. The solution files are ready locally. The commands below create the commits on your computer; the GitHub account, repository URL, and email destination belong to you.

## Files

```text
.gitignore
package.json
playwright.config.ts
pages/LoginPage.ts
test-data/login.json
tests/login-data-provider-json.spec.ts
```

`login.json` contains one successful login and one failed login for an unregistered example address. The slides say a JSON file is on the right of the sample but the attached PDF does not include its contents; the successful case uses credentials from the Day 5 homework.

The JSON import uses TypeScript's built-in JSON support as configured by Playwright. Each record becomes its own clearly named test. Playwright gives each test a fresh browser context.

## Install and run

In a terminal opened in this project directory:

```bash
npm install
npx playwright install chromium
npx playwright test tests/login-data-provider-json.spec.ts --list
npx playwright test tests/login-data-provider-json.spec.ts
```

Add `--headed` to the last test command to show the browser. The test results and HTML report are ignored by Git.

## Git lab

First check that Git is installed and set your own commit identity. These values are examples; use your own name and email:

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list
```

Then, from the project folder, initialize `main` and make a starter commit before adding the JSON-driven test:

```bash
git init -b main
git add .gitignore package.json playwright.config.ts pages/LoginPage.ts README.md
git commit -m "Initialize Playwright project"
git switch -c feature/git_task
git add test-data/login.json tests/login-data-provider-json.spec.ts
git commit -m "Add JSON driven login tests"
git status
git log --oneline --graph --all
```

To publish the work, create a new **public** empty repository under your GitHub account. Leave README, license, and gitignore unchecked there because this project already has those files. Replace `<YOUR_USERNAME>` and `<REPOSITORY>` with the values you chose:

```bash
git remote add origin https://github.com/<YOUR_USERNAME>/<REPOSITORY>.git
git remote -v
git push -u origin main
git push -u origin feature/git_task
```

Merge the feature branch locally and publish the result:

```bash
git switch main
git merge feature/git_task
git push
git branch -d feature/git_task
git branch
```

Open the repository on GitHub and copy its link. The assignment says to email that link, but the recipient address is absent from the attached files; send it to the instructor address from your course. Git credentials, the public repository, and sending that email require your own account and action.

## Notes

- `.gitignore` prevents untracked dependencies, Playwright output, `.env` files, and saved authentication state from entering future commits. It does not remove a file that Git already tracks.
- The successful-login case uses the public credentials from the Day 5 assignment; the failed-login case uses a fictitious email address.
- A Playwright run on the live site returned `Account locked, too many failed attempts. Please contact the administrator.` Stop retrying the shared demo account until it becomes available again. This is a response from the site, not a passed test or a locator failure.
