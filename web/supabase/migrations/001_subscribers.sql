CREATE TABLE IF NOT EXISTS public.subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  source text DEFAULT 'landing_magnet',
  created_at timestamptz DEFAULT now(),
  confirmed_at timestamptz,
  active boolean DEFAULT true
);

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Solo el service role puede insertar/leer (nunca el anon key desde cliente)
CREATE POLICY "service_role_only" ON public.subscribers
  USING (false)
  WITH CHECK (false);

GRANT ALL ON public.subscribers TO service_role;
