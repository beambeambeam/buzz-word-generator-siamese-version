// Source: https://github.com/wevisdemo/conforall/blob/main/web/src/utils/sheets.ts

import { csv } from 'd3-fetch';

type WordType = 'nouns' | 'verbs' | 'adjectives' | 'adverbs';

interface Word {
  word: string;
  type: WordType;
  note?: string;
}

const LOCATION_SHEET_ID = '143LAVljEpg9deO-tgjNm9Hfgodr-2aXu016RB4PHikU';
const LOCATION_SHEET_NAME = 'list';

const locationUrl = encodeURI(
  `https://docs.google.com/spreadsheets/d/${LOCATION_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${LOCATION_SHEET_NAME}`,
);

export const fetchWords = async () =>
  csv(
    locationUrl,
    (d) =>
      ({
        word: d['คำ'],
        type: d['ประเภทคำ'],
        note: d['อื่นๆ (ถ้าแปลให้ใส่คำ)'],
      }) as Word,
  );