import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';
import { supabaseConfig } from './supabase.config';

const supabase = createClient<Database>(supabaseConfig.url, supabaseConfig.key);

export default supabase;
