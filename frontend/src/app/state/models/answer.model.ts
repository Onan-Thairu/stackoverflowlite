export interface Answer {
  id: string;
  description: string;
  user_id: string;
  question_id: string;
  created_at: Date;
  isAccepted: string;
  accepted_email_sent: string
}
