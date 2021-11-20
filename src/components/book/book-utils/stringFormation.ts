export function formationForRIGHT(OA: number, TS: string): string {
  if (OA < 36) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 36 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, 36 + OA)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 36, 36 + OA)
  }
}

export function formationForLEFT1(OA: number, TS: string): string {
  if (OA < 35) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(34 - OA, 106 - OA)
        .split('')
        .reverse()
        .join('')
    )
  } else if (OA >= 35 && OA < 106) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 106 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, OA - 34)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 106, OA - 34)
  }
}

export function formationForLEFT2(OA: number, TS: string): string {
  if (OA < 105) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(104 - OA, 176 - OA)
        .split('')
        .reverse()
        .join('')
    )
  } else if (OA >= 105 && OA < 176) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 176 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, OA - 104)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 176, OA - 104)
  }
}

export function formationForLEFT3(OA: number, TS: string): string {
  if (OA < 175) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(174 - OA, 246 - OA)
        .split('')
        .reverse()
        .join('')
    )
  } else if (OA >= 175 && OA < 246) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 246 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, OA - 174)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 246, OA - 174)
  }
}

export function formationForRIGHTLayout(OA: number, TS: string): string {
  if (OA < 36) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 36 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, 36 + OA)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 36, 36 + OA)
  }
}
