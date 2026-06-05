# Git Guidance

## Creating a Pull Request

Steps on how to create a Pull Request are written below.
[Click here for a video explaining the steps below.](https://www.youtube.com/watch?v=c6b6B9oN4Vg)

- Fork the GitHub repository:

  ```text
  https://github.com/qiskit-community/ecosystem
  ```

- Clone your fork to your local system:

  ```bash
  git clone git@github.com:<your_user_name>/ecosystem.git
  ```

- Add the upstream remote to keep your fork up-to-date:

  ```bash
  git remote add upstream https://github.com/qiskit-community/ecosystem.git
  ```

- Checkout the main branch and merge upstream:

  ```bash
  git checkout main
  git merge upstream/main
  ```

- Create a new branch to store your changes:

  ```bash
  git checkout main
  git branch new-branch
  git checkout new-branch
  ```

- Make the necessary changes, then stage your files:

  ```bash
  git add <files_you_changed>
  ```

- Commit with a descriptive message:

  ```bash
  git commit -m "message"
  ```

- Push your branch to GitHub:

  ```bash
  git push --set-upstream origin new-branch
  ```

- Create the pull request:
  Go back to the browser and navigate to your fork of the project.
  At the top of the repo, there should now be a button called **"Compare & pull request"**.
  Click that, enter your commit message and a comment, then click **"Create pull request"**.

## Merging a Pull Request

- Checkout the branch you are merging into:

  ```bash
  git checkout main
  ```

- Pull the development branch from the fork where the pull request was made:

  ```bash
  git pull https://github.com/forkuser/forkedrepo.git new-branch
  ```

- Merge the development branch:

  ```bash
  git merge new-branch
  ```

- Push main with the new feature merged into it:

  ```bash
  git push origin main
  ```
