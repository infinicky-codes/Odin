# Foundations Course: Git Basics.

### Note/Warning

When trying to make simple changes to the files in your repo, such as attempting to fix a typo in your README.md you might be tempted to make this change directly via Github. However, it is best to avoid this as it will cause issues that require more advanced Git knowledge than we want to go over at this stage (it is covered in a future lesson), for now it is advised to make any changes via your local files then commit and push them using Git commands in your terminal once ready.

### Cheatsheet

This is a reference list of the most commonly used Git commands. Try to familiarize yourself with the commands so that you can eventually remember them all:

-   Commands related to a remote repository:
    -   `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`
    -   `git push` or `git push origin main` (Both accomplish the same goal in this context)
-   Commands related to the workflow:
    -   `git add .`
    -   `git commit -m "A message describing what you have done to make this snapshot different"`
-   Commands related to checking status or log history
    -   `git status`
    -   `git log` (if the terminal seems to be stuck after this command, just press q.)

The basic Git syntax is `program | action | destination`.

For example,

-   `git add .` is read as `git | add | .`, where the period represents everything in the current directory;
-   `git commit -m "message"` is read as `git | commit -m | "message"`; and
-   `git status` is read as `git | status | (no destination)`.

### Changing the Git Commit Message Editor
Changing the default message editor is a good idea in case you accidentally omit the "-m" flag. The following command will set this configuration:

~~~bash
git config --global core.editor "code --wait"
~~~

With that done, you can now choose to use either `git commit -m <your message here>` or just `git commit` to then type your message with Visual Studio Code!
If you choose the latter and type `git commit`, a new tab in VS Code will open for you to write your commit message after you hit <kbd>Enter</kbd> . You may provide more details on multiple lines as part of your commit message. After typing your commit message, save it <kbd>Ctrl + S</kbd> (or Mac equivalent) and close the tab. If you return to the command line, you will see your commit message and a summary of your changes.