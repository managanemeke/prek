set shell := ["nu", "-c"]

default: list

install:
  @bun install
  @prek install

list:
  @just --list

prek: install
  @prek run

run: install
  @bun run index.ts

test: install
  @bun test index.test.ts
