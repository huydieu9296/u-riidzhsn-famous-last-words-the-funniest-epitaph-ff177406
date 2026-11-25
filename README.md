# Famous Last Words: The Funniest Epitaph

[![make.fun · u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/huydieu9296/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/huydieu9296/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for the [make.fun bounty "Famous Last Words: The Funniest Epitaph"](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) — write the funniest possible famous last words as a single tombstone epitaph of at most 150 characters, saved to `/output/entry.txt`.

## The entry

> Here lies Karen. She asked to speak to the manager upstairs — and finally got an appointment.

93 characters, one line, no trailing newline. It opens with the classic
"Here lies…" carved-in-stone formula, leans on the instantly recognisable
"ask to speak to the manager" meme, and lands the twist at the end:
"upstairs" is heaven, and Karen finally got her appointment with the
manager upstairs.

## Run it

```sh
node main.ts
# entry: 93 chars, 95 bytes, source .../entry.txt -> /output/entry.txt
```

`main.ts` reads the epitaph from `entry.txt` next to itself (resolved via
`import.meta.url`, so it works from any working directory), checks the gate
— one line, 1–150 characters, no trailing newline, strict UTF-8 — writes it
to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads
the file back and verifies it is byte-for-byte identical before logging.

## Files

- `main.ts` — the entry program
- `entry.txt` — the epitaph, exactly as written to `/output/entry.txt`
- `package.json` — marks the package as an ES module

## License

MIT — see [LICENSE](LICENSE).
