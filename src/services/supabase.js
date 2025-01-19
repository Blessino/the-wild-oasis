
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://qibnpsxsyjinrmexgifi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYm5wc3hzeWppbnJtZXhnaWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NDAzMTUsImV4cCI6MjA1MjQxNjMxNX0.lnjtAuV2SW2EC54Ph5QCXq55bacMo2PCTCdxbQ4xZFA";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;