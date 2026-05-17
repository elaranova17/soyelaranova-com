export type OracleMessage = {
  id: string
  title: string
  body: string
  closing: string
}

/** Pool v1 · 5 mensajes hardcoded (CONTEXT — sin Sanity aún) */
export const ORACLE_MESSAGES: readonly OracleMessage[] = [
  {
    id: 'pausa',
    title: 'La pausa',
    body: 'Hoy no te pide que corras. Te pide que te quedes un momento y escuches lo que ya sabés pero venís apurando.',
    closing: 'A veces el oráculo no dice más — solo te devuelve el silencio que necesitabas.',
  },
  {
    id: 'espejo',
    title: 'El espejo',
    body: 'Hay algo que venís evitando mirar. No para castigarte — para que dejes de cargarlo en silencio.',
    closing: 'Lo que mirás con ternura deja de perseguirte.',
  },
  {
    id: 'semilla',
    title: 'La semilla',
    body: 'Descartaste algo pequeño porque te pareció insignificante. Es el comienzo de lo que estás llamando a crecer.',
    closing: 'Regádale agua esta semana. Sin prisa.',
  },
  {
    id: 'umbral',
    title: 'El umbral',
    body: 'Estás entre dos versiones de vos. La anterior ya no te queda; la nueva todavía no tiene nombre.',
    closing: 'Caminá despacio. El umbral también es sagrado.',
  },
  {
    id: 'luna',
    title: 'La escucha',
    body: 'Esta noche no es para arreglar nada. Es para sentir el cuerpo y dejar que la cabeza baje un poco.',
    closing: 'Mañana vas a entender algo que hoy solo se presente como cansancio.',
  },
] as const

export function pickOracleMessage(): OracleMessage {
  const index = Math.floor(Math.random() * ORACLE_MESSAGES.length)
  return ORACLE_MESSAGES[index] ?? ORACLE_MESSAGES[0]
}
