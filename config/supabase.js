import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://krorwqqjpumspakewmuf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyb3J3cXFqcHVtc3Bha2V3bXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzQ5NjAsImV4cCI6MjA3Nzg1MDk2MH0.5qGZmRI9KZP0P-qMZtUgFvh-2VEXNt1X1rQU40njMaY'

export const supabase = createClient(supabaseUrl, supabaseKey)
