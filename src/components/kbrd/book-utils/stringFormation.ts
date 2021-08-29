export function formationForRIGHT(OA: number, TS: string): string {
  if (OA < 35) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 35 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, 35 + OA)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 35, 35 + OA)
  }
}

export function formationForLEFT1(OA: number, TS: string): string {
  if (OA < 35) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(35 - OA, 105 - OA)
        .split('')
        .reverse()
        .join('')
    )
  } else if (OA >= 35 && OA < 105) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 105 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, OA - 35)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 105, OA - 35)
  }
}

export function formationForLEFT2(OA: number, TS: string): string {
  if (OA < 105) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(105 - OA, 175 - OA)
        .split('')
        .reverse()
        .join('')
    )
  } else if (OA >= 105 && OA < 175) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 175 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, OA - 105)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 175, OA - 105)
  }
}

export function formationForLEFT3(OA: number, TS: string): string {
  if (OA < 175) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(175 - OA, 245 - OA)
        .split('')
        .reverse()
        .join('')
    )
  } else if (OA >= 175 && OA < 245) {
    return (
      '\u00A0'.repeat(OA) +
      TS.split('')
        .reverse()
        .join('')
        .slice(0, 245 - OA)
        .split('')
        .reverse()
        .join('') +
      TS.slice(0, OA - 175)
    )
  } else {
    return '\u00A0'.repeat(OA) + TS.slice(OA - 245, OA - 175)
  }
}
