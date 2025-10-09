import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

  const projectTypes = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'corporate', label: 'Corporate Website' },
    { value: 'api', label: 'API Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timeframes = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-2months', label: '1-2 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Call' },
    { value: 'meeting', label: 'In-Person Meeting' }
  ];

  const handleStepSubmit = (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit(updatedData);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3]?.map((step) => (
        <React.Fragment key={step}>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            step <= currentStep 
              ? 'bg-primary border-primary text-white' :'border-border text-text-secondary'
          }`}>
            {step < currentStep ? (
              <Icon name="Check" size={16} />
            ) : (
              <span className="text-sm font-medium">{step}</span>
            )}
          </div>
          {step < 3 && (
            <div className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
              step < currentStep ? 'bg-primary' : 'bg-border'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-2">Let's Get Started</h3>
        <p className="text-text-secondary">Tell me about yourself and your project</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          placeholder="John"
          required
          error={errors?.firstName?.message}
          {...register('firstName', { required: 'First name is required' })}
        />
        
        <Input
          label="Last Name"
          type="text"
          placeholder="Doe"
          required
          error={errors?.lastName?.message}
          {...register('lastName', { required: 'Last name is required' })}
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        placeholder="john@company.com"
        description="I'll use this to send you project updates"
        required
        error={errors?.email?.message}
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
      />

      <Input
        label="Company/Organization"
        type="text"
        placeholder="Acme Inc."
        description="Optional - helps me understand your context"
        {...register('company')}
      />

      <Select
        label="Project Type"
        placeholder="Select project type"
        options={projectTypes}
        required
        error={errors?.projectType?.message}
        value={watch('projectType')}
        onChange={(value) => setValue('projectType', value)}
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-2">Project Details</h3>
        <p className="text-text-secondary">Help me understand your vision and requirements</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Project Description *
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
            rows="4"
            placeholder="Describe your project, goals, and any specific requirements..."
            {...register('description', { required: 'Project description is required' })}
          />
          {errors?.description && (
            <p className="mt-1 text-sm text-error">{errors?.description?.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Budget Range"
            placeholder="Select budget range"
            options={budgetRanges}
            required
            error={errors?.budget?.message}
            value={watch('budget')}
            onChange={(value) => setValue('budget', value)}
          />

          <Select
            label="Timeline"
            placeholder="Select timeframe"
            options={timeframes}
            required
            error={errors?.timeline?.message}
            value={watch('timeline')}
            onChange={(value) => setValue('timeline', value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Additional Requirements
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
            rows="3"
            placeholder="Any specific technologies, integrations, or features you need..."
            {...register('requirements')}
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-2">Let's Connect</h3>
        <p className="text-text-secondary">Choose how you'd like to discuss your project</p>
      </div>

      <div className="space-y-6">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          description="Optional - for phone or video calls"
          {...register('phone')}
        />

        <Select
          label="Preferred Contact Method"
          placeholder="How would you like to connect?"
          options={contactMethods}
          required
          error={errors?.contactMethod?.message}
          value={watch('contactMethod')}
          onChange={(value) => setValue('contactMethod', value)}
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Best Time to Contact
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
            rows="2"
            placeholder="e.g., Weekdays 9 AM - 5 PM EST, or anytime via email..."
            {...register('availability')}
          />
        </div>

        <div className="space-y-4">
          <Checkbox
            label="I'd like to receive updates about similar projects and tech insights"
            {...register('newsletter')}
          />
          
          <Checkbox
            label="I agree to the terms of service and privacy policy"
            required
            error={errors?.terms?.message}
            {...register('terms', { required: 'Please agree to the terms' })}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-card rounded-xl shadow-brand-medium p-8">
      {renderStepIndicator()}
      
      <form onSubmit={handleSubmit(handleStepSubmit)} className="space-y-8">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex items-center justify-between pt-6 border-t border-border">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={goToPreviousStep}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Previous
            </Button>
          ) : (
            <div />
          )}

          <Button
            type="submit"
            loading={isSubmitting}
            iconName={currentStep === 3 ? "Send" : "ArrowRight"}
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-secondary"
          >
            {currentStep === 3 ? 'Send Message' : 'Continue'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;