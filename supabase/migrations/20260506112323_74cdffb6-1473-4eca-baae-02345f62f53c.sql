-- Revoke any default privileges on contact_submissions from public roles
REVOKE ALL ON public.contact_submissions FROM anon, authenticated, public;

-- Grant only INSERT to anon/authenticated (RLS still enforces the existing check)
GRANT INSERT ON public.contact_submissions TO anon, authenticated;

-- Add restrictive policies that explicitly deny SELECT/UPDATE/DELETE to anon and authenticated roles
CREATE POLICY "No public read access to contact submissions"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (false);

CREATE POLICY "No public update access to contact submissions"
ON public.contact_submissions
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

CREATE POLICY "No public delete access to contact submissions"
ON public.contact_submissions
FOR DELETE
TO anon, authenticated
USING (false);