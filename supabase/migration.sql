-- Meridian Identity: leads table
-- Run this in your Supabase SQL editor

create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  company text not null,
  email text not null unique,
  service_interest text,
  message text,
  source text not null check (source in ('landing', 'checker')),
  assessment_score integer,
  assessment_level text check (assessment_level in ('ready', 'gaps', 'at_risk')),
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table leads enable row level security;

-- Policy: allow inserts from anon (public form submissions)
create policy "Allow public inserts" on leads
  for insert
  with check (true);

-- Index on email for uniqueness lookups
create index if not exists leads_email_idx on leads (email);

-- Index on source for filtering
create index if not exists leads_source_idx on leads (source);
