#!/bin/bash

# Script untuk commit otomatis dengan conventional commits
# Usage: ./commit.sh "feat: menambahkan fitur baru"

COMMIT_MESSAGE="$1"

if [ -z "$COMMIT_MESSAGE" ]; then
    echo "Error: Commit message required"
    echo "Usage: ./commit.sh \"feat: menambahkan fitur baru\""
    exit 1
fi

git add .
git commit -m "$COMMIT_MESSAGE"
echo "✅ Commit berhasil: $COMMIT_MESSAGE"