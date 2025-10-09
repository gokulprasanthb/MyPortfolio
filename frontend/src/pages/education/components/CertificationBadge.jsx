import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationBadge = ({ certification, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Expired': return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleVerificationClick = (e) => {
    e?.stopPropagation();
    if (certification?.verificationUrl) {
      window.open(certification?.verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="bg-card border border-border rounded-brand-lg p-4 brand-card-hover shadow-brand-subtle hover:shadow-brand-medium transition-all duration-brand-medium cursor-pointer"
      onClick={() => onClick && onClick(certification)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-muted rounded-brand flex items-center justify-center overflow-hidden">
            <Image
              src={certification?.logo}
              alt={`${certification?.issuer} logo`}
              className={`w-full h-full object-contain transition-opacity duration-brand-medium ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <Icon name="Shield" size={20} className="text-text-secondary" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-text-primary text-sm truncate">{certification?.name}</h3>
            <p className="text-xs text-text-secondary">{certification?.issuer}</p>
          </div>
        </div>

        {certification?.verificationUrl && (
          <button
            onClick={handleVerificationClick}
            className="p-1.5 rounded-brand text-primary hover:bg-primary/10 transition-colors duration-brand-fast focus-brand"
            title="Verify Certificate"
          >
            <Icon name="ExternalLink" size={14} />
          </button>
        )}
      </div>
      {/* Status and Date */}
      <div className="flex items-center justify-between mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(certification?.status)}`}>
          {certification?.status}
        </span>
        
        <div className="text-xs text-text-secondary">
          {certification?.issueDate}
          {certification?.expiryDate && (
            <span> - {certification?.expiryDate}</span>
          )}
        </div>
      </div>
      {/* Skills */}
      {certification?.skills && certification?.skills?.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {certification?.skills?.slice(0, 3)?.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded"
            >
              {skill}
            </span>
          ))}
          {certification?.skills?.length > 3 && (
            <span className="px-2 py-0.5 bg-muted text-text-secondary text-xs rounded">
              +{certification?.skills?.length - 3} more
            </span>
          )}
        </div>
      )}
      {/* Credential ID */}
      {certification?.credentialId && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Icon name="Hash" size={12} className="text-text-secondary" />
            <span className="text-xs text-text-secondary font-mono">{certification?.credentialId}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationBadge;