#!/usr/bin/env node
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const template = readFileSync(new URL('./templates/cv-template.html', import.meta.url), 'utf8');

function cssBlock(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = template.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`, 'm'));
  assert.ok(match, `missing CSS rule for ${selector}`);
  return match[1];
}

function assertDeclaration(selector, property, value) {
  const block = cssBlock(selector);
  const escapedProperty = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  assert.match(
    block,
    new RegExp(`${escapedProperty}\\s*:\\s*${escapedValue}\\s*;`),
    `${selector} should set ${property}: ${value}`,
  );
}

const governedMappings = [
  ['.header h1', 'color', '#102A43'],
  ['.header-gradient', 'background', '#274C77'],
  ['.contact-row', 'color', '#687684'],
  ['.contact-row a', 'color', '#687684'],
  ['.contact-row .separator', 'color', '#DCE3EA'],
  ['.section-title', 'color', '#183B5B'],
  ['.section-title', 'border-bottom', '1.5px solid #DCE3EA'],
  ['.competency-tag', 'color', '#183B5B'],
  ['.competency-tag', 'background', '#EEF3F8'],
  ['.competency-tag', 'border', '1px solid #C9D7E5'],
  ['.job-company', 'color', '#274C77'],
  ['.job-period', 'color', '#687684'],
  ['.job-location', 'color', '#687684'],
  ['.project-title', 'color', '#274C77'],
  ['.project-badge', 'color', '#183B5B'],
  ['.project-badge', 'background', '#EEF3F8'],
  ['.project-tech', 'color', '#687684'],
  ['.edu-org', 'color', '#274C77'],
  ['.edu-year', 'color', '#687684'],
  ['.cert-org', 'color', '#274C77'],
  ['.cert-year', 'color', '#687684'],
  ['html[lang="ar"] .header-gradient', 'background', '#274C77'],
  ['.summary-text', 'color', '#2f2f2f'],
  ['.job li', 'color', '#333'],
  ['.project-desc', 'color', '#444'],
];

for (const [selector, property, value] of governedMappings) {
  assertDeclaration(selector, property, value);
}

for (const token of ['#102A43', '#183B5B', '#274C77', '#687684', '#EEF3F8', '#C9D7E5', '#DCE3EA']) {
  assert.ok(template.includes(token), `missing Executive Navy token ${token}`);
}

for (const legacy of ['hsl(187', 'hsl(270', 'linear-gradient(to right', 'linear-gradient(to left', '#555', '#888', '#ccc']) {
  assert.equal(template.includes(legacy), false, `legacy palette remains: ${legacy}`);
}

for (const placeholder of ['{{NAME}}', '{{SUMMARY_TEXT}}', '{{COMPETENCIES}}', '{{EXPERIENCE}}']) {
  assert.ok(template.includes(placeholder), `template placeholder changed: ${placeholder}`);
}

console.log('Executive Navy CV palette selectors: PASS');
