# Git Made Easy (gitez)

A simple Node.js CLI tool to add, commit and push changes to remote repo with a single command.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Download or clone to your project directory and type

```sh
npm install -g
```

## Usage

- Push to repo without message

```sh
gitez r
```
This will add and commit all changes to the repo with commit message as "Regular Sync". Then changes are pushed to remote repo.

- Push to repo with message

```sh
gitez m "Added new files"
```

This will add and commit all changes to the repo with commit message specified in command. Then changes are pushed to remote repo.
