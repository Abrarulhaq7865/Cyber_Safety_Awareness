import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertTriangle, Phone, MapPin, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFeedbackProps {
  isTelugu: boolean;
}

export default function ContactFeedback({ isTelugu }: ContactFeedbackProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'general' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const { error } = await supabase.from('feedback').insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        type: formData.type,
      });

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '', type: 'general' });
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const feedbackTypes = [
    { value: 'general', label: isTelugu ? 'సాధారణ అభిప్రాయం' : 'General Feedback' },
    { value: 'suggestion', label: isTelugu ? 'సూచన' : 'Suggestion' },
    { value: 'report', label: isTelugu ? 'మోసం నివేదన' : 'Report a Scam' },
    { value: 'question', label: isTelugu ? 'ప్రశ్న' : 'Question' },
  ];

  const contactInfo = [
    { icon: MapPin, label: isTelugu ? 'ప్రాజెక్ట్ స్థలం' : 'Project Location', value: 'Akkampalle Village, Anantapur District, AP' },
    { icon: Phone, label: isTelugu ? 'హెల్ప్‌లైన్' : 'Helpline', value: '1930 (National Cybercrime)' },
    { icon: Mail, label: isTelugu ? 'ఇన్‌స్టిట్యూట్' : 'Institution', value: 'GATES Institute of Technology' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <MessageSquare className="w-3 h-3" />
            {isTelugu ? 'సంప్రదించండి' : 'Contact Us'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'అభిప్రాయం తెలియజేయండి' : 'Share Your Feedback'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'మీ అనుభవాలు, సూచనలు లేదా ప్రశ్నలను మాతో పంచుకోండి'
              : 'Share your experiences, suggestions, or questions with our team. Report scams to help protect the community.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-cyber-text mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyber-primary" />
                {isTelugu ? 'సంప్రదింపు సమాచారం' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-cyber-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-cyber-textDim mb-0.5">{item.label}</div>
                        <div className="text-sm text-cyber-text font-medium">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Project Team */}
            <div className="glass-card p-6">
              <h3 className="text-base font-bold text-cyber-text mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-cyber-accent" />
                {isTelugu ? 'ప్రాజెక్ట్ టీమ్' : 'Project Team'}
              </h3>
              <div className="space-y-2 text-sm text-cyber-textMuted">
                <p><span className="text-cyber-text font-medium">Team Lead:</span> Shaik Mohammad Abrarul Haq</p>
                <p><span className="text-cyber-text font-medium">Members:</span> Divvala Naveen, Siddha Nikhil</p>
                <p><span className="text-cyber-text font-medium">Members:</span> Vajrala Tharakeshwar, Chenna Mahendra</p>
                <p><span className="text-cyber-text font-medium">Guide:</span> Ms. Venkata Lakshmi</p>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="glass-card p-5 border border-cyber-error/30 bg-cyber-error/5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-cyber-error shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-cyber-error mb-1">
                    {isTelugu ? 'అత్యవసర సందేశం' : 'Emergency Notice'}
                  </div>
                  <p className="text-xs text-cyber-textMuted">
                    {isTelugu
                      ? 'మీరు ఆన్‌లైన్ మోసానికి గురైతే, వెంటనే 1930 కాల్ చేయండి. ఈ ఫారమ్ అత్యవసర రిపోర్టింగ్ కోసం కాదు.'
                      : 'If you have been scammed online, please call 1930 immediately. This form is not for emergency reporting.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Feedback Type */}
                <div>
                  <label className="block text-sm font-semibold text-cyber-text mb-2">
                    {isTelugu ? 'అభిప్రాయం రకం' : 'Feedback Type'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {feedbackTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, type: type.value }))}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          formData.type === type.value
                            ? 'bg-cyber-primary/10 border-cyber-primary/40 text-cyber-primary'
                            : 'bg-cyber-bg border-cyber-border/40 text-cyber-textMuted hover:border-cyber-border'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-cyber-text mb-2">
                      {isTelugu ? 'మీ పేరు' : 'Your Name'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-textDim" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        placeholder={isTelugu ? 'పేరు నమోదు చేయండి' : 'Enter your name'}
                        className="w-full bg-cyber-bg border border-cyber-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-cyber-text placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-cyber-text mb-2">
                      {isTelugu ? 'ఇమెయిల్' : 'Email Address'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-textDim" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        placeholder={isTelugu ? 'ఇమెయిల్ నమోదు చేయండి' : 'Enter your email'}
                        className="w-full bg-cyber-bg border border-cyber-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-cyber-text placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-cyber-text mb-2">
                    {isTelugu ? 'మీ సందేశం' : 'Your Message'}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    placeholder={isTelugu ? 'మీ అభిప్రాయం, సూచన లేదా ప్రశ్న ఇక్కడ వ్రాయండి...' : 'Share your feedback, suggestion, or question here...'}
                    className="w-full bg-cyber-bg border border-cyber-border/50 rounded-lg px-4 py-3 text-sm text-cyber-text placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50 resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {isTelugu ? 'ధన్యవాదాలు! మీ అభిప్రాయం సమర్పించబడింది.' : 'Thank you! Your feedback has been submitted successfully.'}
                    </span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-cyber-error/10 border border-cyber-error/30 text-cyber-error">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm">
                      {isTelugu ? 'సమర్పణ విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.' : 'Submission failed. Please try again.'}
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cyber-bg/30 border-t-cyber-bg rounded-full animate-spin" />
                      {isTelugu ? 'సమర్పిస్తోంది...' : 'Submitting...'}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {isTelugu ? 'అభిప్రాయం పంపండి' : 'Send Feedback'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
