set shell := ["nu", "-c"]

default: list

install:
  @bun install

list:
  @just --list
