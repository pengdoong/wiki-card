# Audio licenses

All recorded sounds and the music below are CC0 (public domain, no attribution required); credit given anyway. The
user picked them on the sound review page (2026-09-27); `design/sound/build.py --game` downloads the originals and
writes these files: leading silence cut, effects peak-normalized to -3 dBFS as mono 96 kbps mp3, the BGM
loudness-normalized to -18 LUFS as mono 80 kbps mp3. The 에픽 chord, 유니크 sparkle and FEVER shimmer are **not
files**: they're synthesized at runtime with Web Audio (`src/game/sound.ts`).

| File | Source | Original file | Author | License |
| --- | --- | --- | --- | --- |
| `bgm.mp3` | [OpenGameArt: Welcome to the Item Shop](https://opengameart.org/content/welcome-to-the-item-shop) | `welcome_to_the_item_shop.ogg` | congusbongus | CC0 1.0 |
| `tear-grain.mp3` | [Kenney: Casino Audio](https://kenney.nl/assets/casino-audio) | `cards-pack-take-out-2.ogg` | Kenney Vleugels (kenney.nl) | CC0 1.0 |
| `tear-complete.mp3` | [Kenney: Casino Audio](https://kenney.nl/assets/casino-audio) | `cards-pack-open-2.ogg` | Kenney Vleugels (kenney.nl) | CC0 1.0 |
| `card-flip.mp3` | [OpenGameArt: Playing Card Sounds](https://opengameart.org/content/playing-card-sounds) | `contact1.wav` | bmaczero | CC0 1.0 |
| `fanfare-legendary.mp3` | [OpenGameArt: Hyper Ultra Fanfare](https://opengameart.org/content/hyper-ultra-fanfare) | `sboe.mp3` (cut to 3 s, faded over the last 0.8 s) | Zane Little Music | CC0 1.0 |
| `coin-tick.mp3` | [OpenGameArt: Gold Coin](https://opengameart.org/content/gold-coin-6) | `coin_0.ogg` | aeva | CC0 1.0 |
| `mission-coins.mp3` | [Kenney: RPG Audio](https://kenney.nl/assets/rpg-audio) | `handleCoins2.ogg` | Kenney Vleugels (kenney.nl) | CC0 1.0 |
| `power-up.mp3` | rendered by `design/sound/build.py` (`power_ticks`) | none | Claude Code, for this game | own work |
| `click.mp3` | [Kenney: UI Audio](https://kenney.nl/assets/ui-audio) | `click1.ogg` | Kenney Vleugels (kenney.nl) | CC0 1.0 |

Each Kenney pack's `License.txt` reads: "Creative Commons Zero, CC0 — http://creativecommons.org/publicdomain/zero/1.0/
— free to use in personal, educational and commercial projects." Each OpenGameArt page lists CC0 as its license.

Total: ~1.36 MB, almost all of it the BGM.
