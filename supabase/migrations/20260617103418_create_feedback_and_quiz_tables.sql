
CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  message text NOT NULL,
  type text NOT NULL DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_can_insert_feedback" ON feedback FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "authenticated_can_select_feedback" ON feedback FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "authenticated_can_update_feedback" ON feedback FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_can_delete_feedback" ON feedback FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS quiz_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  score integer NOT NULL,
  total integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_can_insert_quiz_score" ON quiz_scores FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "anyone_can_select_quiz_scores" ON quiz_scores FOR SELECT
  TO anon USING (true);

CREATE POLICY "authenticated_can_update_quiz_scores" ON quiz_scores FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_can_delete_quiz_scores" ON quiz_scores FOR DELETE
  TO authenticated USING (true);
