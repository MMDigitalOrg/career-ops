#!/usr/bin/env node
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const template = readFileSync(new URL('./templates/cv-template.html', import.meta.url), 'utf8');

for (const token of ['#102A43', '#183B5B', '#274C77', '#687684', '#EEF3F8', '#C9D7E5', '#DCE3EA']) {
  assert.ok(template.includes(token), `missing Executive Navy token ${token}`);
}

for (const legacy of ['hsl(187', 'hsl(270', 'linear-gradient(to right', 'linear-gradient(to left']) {
  assert.equal(template.includes(legacy), false, `legacy palette remains: ${legacy}`);
}

for (const placeholder of ['{{NAME}}', '{{SUMMARY_TEXT}}', '{{COMPETENCIES}}', '{{EXPERIENCE}}']) {
  assert.ok(template.includes(placeholder), `template placeholder changed: ${placeholder}`);
}

console.log('Executive Navy CV palette: PASS');
