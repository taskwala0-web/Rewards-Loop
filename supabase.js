import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Tera Supabase Project URL
const SUPABASE_URL = 'https://tjrjodoodbpdnrkldsav.supabase.co'

// Yahan apni Supabase Dashboard se 'anon public' key copy karke daalna
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqcmpvZG9vZGJwZG5ya2xkc2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2ODk5ODcsImV4cCI6MjEwODI2NTk4N30.NHUsBeBRXCBG0e3h0m-1t2sUTI7RIEzAdAQmxAtpZ3w'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)