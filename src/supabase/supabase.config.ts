import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

const supabaseUrl = 'https://wglgllhehvxgusuogusm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbGdsbGhlaHZ4Z3VzdW9ndXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2NzUwNTgsImV4cCI6MjAwNTI1MTA1OH0.gHqb_EIjKUickf2y-6bBRaDibUKplWvwqiwlUwyI3R4';

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
