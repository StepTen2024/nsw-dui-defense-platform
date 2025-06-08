// NSW DUI Penalties based on current legislation
// Source: NSW Road Transport Act 2013 and Road Rules

export const BAC_RANGES = {
  LOW_RANGE: { min: 0.05, max: 0.079, label: 'Low Range PCA' },
  MID_RANGE: { min: 0.08, max: 0.149, label: 'Mid Range PCA' },
  HIGH_RANGE: { min: 0.15, max: 1.0, label: 'High Range PCA' },
  SPECIAL_RANGE: { min: 0.02, max: 0.049, label: 'Special Range (Learner/P1/P2)' }
};

export const OFFENSE_CATEGORIES = {
  FIRST_OFFENSE: 'first',
  SECOND_OFFENSE: 'second',
  THIRD_PLUS_OFFENSE: 'third_plus'
};

export const PENALTIES = {
  // Low Range PCA (0.05 - 0.079)
  LOW_RANGE: {
    [OFFENSE_CATEGORIES.FIRST_OFFENSE]: {
      fine: { min: 1100, max: 2200 },
      licenseSuspension: { min: 3, max: 6 }, // months
      prisonTerm: { min: 0, max: 9 }, // months
      interlock: false,
      communityService: { min: 0, max: 200 }, // hours
      description: 'First offense low range PCA'
    },
    [OFFENSE_CATEGORIES.SECOND_OFFENSE]: {
      fine: { min: 2200, max: 3300 },
      licenseSuspension: { min: 6, max: 12 },
      prisonTerm: { min: 0, max: 12 },
      interlock: true,
      communityService: { min: 0, max: 300 },
      description: 'Second offense low range PCA'
    },
    [OFFENSE_CATEGORIES.THIRD_PLUS_OFFENSE]: {
      fine: { min: 3300, max: 5500 },
      licenseSuspension: { min: 12, max: 36 },
      prisonTerm: { min: 0, max: 18 },
      interlock: true,
      communityService: { min: 0, max: 500 },
      description: 'Third or subsequent offense low range PCA'
    }
  },

  // Mid Range PCA (0.08 - 0.149)
  MID_RANGE: {
    [OFFENSE_CATEGORIES.FIRST_OFFENSE]: {
      fine: { min: 2200, max: 3300 },
      licenseSuspension: { min: 6, max: 12 },
      prisonTerm: { min: 0, max: 12 },
      interlock: true,
      communityService: { min: 0, max: 300 },
      description: 'First offense mid range PCA'
    },
    [OFFENSE_CATEGORIES.SECOND_OFFENSE]: {
      fine: { min: 3300, max: 5500 },
      licenseSuspension: { min: 12, max: 24 },
      prisonTerm: { min: 0, max: 18 },
      interlock: true,
      communityService: { min: 0, max: 500 },
      description: 'Second offense mid range PCA'
    },
    [OFFENSE_CATEGORIES.THIRD_PLUS_OFFENSE]: {
      fine: { min: 5500, max: 11000 },
      licenseSuspension: { min: 24, max: 60 },
      prisonTerm: { min: 0, max: 24 },
      interlock: true,
      communityService: { min: 0, max: 750 },
      description: 'Third or subsequent offense mid range PCA'
    }
  },

  // High Range PCA (0.15+)
  HIGH_RANGE: {
    [OFFENSE_CATEGORIES.FIRST_OFFENSE]: {
      fine: { min: 3300, max: 5500 },
      licenseSuspension: { min: 12, max: 36 },
      prisonTerm: { min: 0, max: 18 },
      interlock: true,
      communityService: { min: 0, max: 500 },
      description: 'First offense high range PCA'
    },
    [OFFENSE_CATEGORIES.SECOND_OFFENSE]: {
      fine: { min: 5500, max: 11000 },
      licenseSuspension: { min: 24, max: 60 },
      prisonTerm: { min: 0, max: 24 },
      interlock: true,
      communityService: { min: 0, max: 750 },
      description: 'Second offense high range PCA'
    },
    [OFFENSE_CATEGORIES.THIRD_PLUS_OFFENSE]: {
      fine: { min: 11000, max: 22000 },
      licenseSuspension: { min: 36, max: 120 },
      prisonTerm: { min: 0, max: 36 },
      interlock: true,
      communityService: { min: 0, max: 1000 },
      description: 'Third or subsequent offense high range PCA'
    }
  },

  // Special Range (Learner/P1/P2 drivers)
  SPECIAL_RANGE: {
    [OFFENSE_CATEGORIES.FIRST_OFFENSE]: {
      fine: { min: 561, max: 1122 },
      licenseSuspension: { min: 3, max: 6 },
      prisonTerm: { min: 0, max: 0 },
      interlock: false,
      communityService: { min: 0, max: 100 },
      description: 'First offense special range PCA'
    },
    [OFFENSE_CATEGORIES.SECOND_OFFENSE]: {
      fine: { min: 1122, max: 2244 },
      licenseSuspension: { min: 6, max: 12 },
      prisonTerm: { min: 0, max: 6 },
      interlock: true,
      communityService: { min: 0, max: 200 },
      description: 'Second offense special range PCA'
    },
    [OFFENSE_CATEGORIES.THIRD_PLUS_OFFENSE]: {
      fine: { min: 2244, max: 4488 },
      licenseSuspension: { min: 12, max: 24 },
      prisonTerm: { min: 0, max: 12 },
      interlock: true,
      communityService: { min: 0, max: 300 },
      description: 'Third or subsequent offense special range PCA'
    }
  }
};

// Additional charges and their penalties
export const ADDITIONAL_CHARGES = {
  REFUSE_BREATH_TEST: {
    fine: { min: 3300, max: 5500 },
    licenseSuspension: { min: 12, max: 36 },
    prisonTerm: { min: 0, max: 18 },
    interlock: true,
    description: 'Refuse breath test'
  },
  DANGEROUS_DRIVING: {
    fine: { min: 3300, max: 11000 },
    licenseSuspension: { min: 12, max: 60 },
    prisonTerm: { min: 0, max: 36 },
    interlock: false,
    description: 'Dangerous driving'
  },
  DRIVE_WHILE_SUSPENDED: {
    fine: { min: 3300, max: 5500 },
    licenseSuspension: { min: 12, max: 36 },
    prisonTerm: { min: 0, max: 18 },
    interlock: false,
    description: 'Drive while license suspended'
  }
};

// Court costs and legal fees
export const COURT_COSTS = {
  LOCAL_COURT: {
    filing: 120,
    hearing: 250,
    adjournment: 80
  },
  DISTRICT_COURT: {
    filing: 500,
    hearing: 800,
    adjournment: 200
  },
  LEGAL_REPRESENTATION: {
    solicitor: { min: 250, max: 600 }, // per hour
    barrister: { min: 800, max: 2000 }, // per day
    duty_lawyer: 0 // free
  }
};

// Mitigating and aggravating factors
export const SENTENCING_FACTORS = {
  MITIGATING: [
    'First offense',
    'Good character references',
    'Early guilty plea',
    'Remorse shown',
    'Cooperation with police',
    'Medical/personal circumstances',
    'Employment requirements',
    'Family hardship',
    'Low BAC reading',
    'Short distance driven'
  ],
  AGGRAVATING: [
    'High BAC reading',
    'Repeat offense',
    'Dangerous driving',
    'Accident involved',
    'Children in vehicle',
    'Commercial vehicle',
    'Learner/Provisional license',
    'Refused breath test',
    'Poor driving record',
    'Speed involved'
  ]
};

// Calculate penalty range based on BAC and offense history
export const calculatePenalty = (bacLevel, priorOffenses, additionalCharges = []) => {
  const bacRange = getBacRange(bacLevel);
  const offenseCategory = getOffenseCategory(priorOffenses);
  
  if (!bacRange || !PENALTIES[bacRange]) {
    throw new Error('Invalid BAC level');
  }
  
  const basePenalty = PENALTIES[bacRange][offenseCategory];
  
  // Calculate total penalties including additional charges
  let totalPenalty = { ...basePenalty };
  
  additionalCharges.forEach(charge => {
    if (ADDITIONAL_CHARGES[charge]) {
      const additional = ADDITIONAL_CHARGES[charge];
      totalPenalty.fine.min += additional.fine.min;
      totalPenalty.fine.max += additional.fine.max;
      totalPenalty.licenseSuspension.max = Math.max(
        totalPenalty.licenseSuspension.max, 
        additional.licenseSuspension.max
      );
      totalPenalty.prisonTerm.max = Math.max(
        totalPenalty.prisonTerm.max, 
        additional.prisonTerm.max
      );
    }
  });
  
  return {
    bacRange,
    offenseCategory,
    penalty: totalPenalty,
    riskLevel: getRiskLevel(bacLevel, priorOffenses),
    additionalCharges
  };
};

// Determine BAC range category
export const getBacRange = (bacLevel) => {
  const bac = parseFloat(bacLevel);
  
  if (bac >= BAC_RANGES.HIGH_RANGE.min) return 'HIGH_RANGE';
  if (bac >= BAC_RANGES.MID_RANGE.min) return 'MID_RANGE';
  if (bac >= BAC_RANGES.LOW_RANGE.min) return 'LOW_RANGE';
  if (bac >= BAC_RANGES.SPECIAL_RANGE.min) return 'SPECIAL_RANGE';
  
  return null;
};

// Determine offense category
export const getOffenseCategory = (priorOffenses) => {
  const priors = parseInt(priorOffenses) || 0;
  
  if (priors === 0) return OFFENSE_CATEGORIES.FIRST_OFFENSE;
  if (priors === 1) return OFFENSE_CATEGORIES.SECOND_OFFENSE;
  return OFFENSE_CATEGORIES.THIRD_PLUS_OFFENSE;
};

// Calculate risk level
export const getRiskLevel = (bacLevel, priorOffenses) => {
  const bac = parseFloat(bacLevel);
  const priors = parseInt(priorOffenses) || 0;
  
  if (bac >= 0.15 || priors >= 2) return 'HIGH';
  if (bac >= 0.08 || priors >= 1) return 'MEDIUM';
  return 'LOW';
}; 