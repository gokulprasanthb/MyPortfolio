import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CertificationModal = ({ certification, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !certification) return null;

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  const handleVerificationClick = () => {
    if (certification?.verificationUrl) {
      window.open(certification?.verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Expired': return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-brand z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card border border-border rounded-brand-xl shadow-brand-prominent max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-brand-lg flex items-center justify-center overflow-hidden">
              <Image
                src={certification?.logo}
                alt={`${certification?.issuer} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary">{certification?.name}</h2>
              <p className="text-text-secondary">{certification?.issuer}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-brand text-text-secondary hover:text-text-primary hover:bg-muted transition-colors duration-brand-fast focus-brand"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Status and Dates */}
          <div className="flex items-center justify-between mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(certification?.status)}`}>
              {certification?.status}
            </span>
            
            <div className="text-sm text-text-secondary">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Calendar" size={14} />
                <span>Issued: {certification?.issueDate}</span>
              </div>
              {certification?.expiryDate && (
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={14} />
                  <span>Expires: {certification?.expiryDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          {certification?.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">About This Certification</h3>
              <p className="text-text-secondary leading-relaxed">{certification?.description}</p>
            </div>
          )}

          {/* Skills Covered */}
          {certification?.skills && certification?.skills?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Skills Covered</h3>
              <div className="flex flex-wrap gap-2">
                {certification?.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Learning Outcomes */}
          {certification?.learningOutcomes && certification?.learningOutcomes?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Learning Outcomes</h3>
              <div className="space-y-2">
                {certification?.learningOutcomes?.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Credential Information */}
          <div className="bg-muted/50 rounded-brand-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">Credential Information</h3>
            <div className="space-y-2">
              {certification?.credentialId && (
                <div className="flex items-center gap-2">
                  <Icon name="Hash" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">ID: </span>
                  <span className="text-sm font-mono text-text-primary">{certification?.credentialId}</span>
                </div>
              )}
              
              {certification?.issueDate && (
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">Issue Date: </span>
                  <span className="text-sm text-text-primary">{certification?.issueDate}</span>
                </div>
              )}

              {certification?.validationMethod && (
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">Validation: </span>
                  <span className="text-sm text-text-primary">{certification?.validationMethod}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {certification?.verificationUrl && (
              <Button
                variant="default"
                onClick={handleVerificationClick}
                iconName="ExternalLink"
                iconPosition="left"
                className="flex-1"
              >
                Verify Certificate
              </Button>
            )}
            
            {certification?.certificateUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(certification?.certificateUrl, '_blank')}
                iconName="Download"
                iconPosition="left"
                className="flex-1"
              >
                View Certificate
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;