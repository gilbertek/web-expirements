import {
  titlelize
} from './Utils';

class Account {
  constructor(args = {}) {
    Object.assign(this, {
      group_name:   args.group_name,
      group_number: args.group_number,
      member_id:    args.member_id,
      pbm_id:       args.pbm_id,
      pbm_name:     args.pbm_name,
      plan_name:    args.plan_name,
      plan_number:  args.plan_number
    });
  }
}

class Formulary {
  constructor(args = {}) {
    Object.assign(this, {
      alternative_id: args.alternative_id,
      copay_id:       args.copay_id,
      coverage_id:    args.coverage_id,
      formulary_id:   args.formulary_id
    });
  }
}

class Plan {
  constructor(args = {}) {
    Object.assign(this, {
      account:   new Account(args.account),
      formulary: new Formulary(args.formulary)
    });
  }

  getPbmName() {
    return this.account.pbm_name;
  }

  getPbmId() {
    return this.account.pbm_id;
  }

  getPlanId() {
    return this.account.plan_number;
  }

  getPlanName() {
    return this.account.plan_name;
  }
  getMemberId() {
    return this.account.member_id;
  }

  getGroupName() {
    return this.account.group_name;
  }

  getGroupId() {
    return this.account.group_id;
  }
}

class Payer {
  constructor(args = {}) {
    Object.assign(this, {
      displayable_alternatives:     args.displayable_alternatives,
      displayable_coverage_details: args.displayable_coverage_details,
      errors:                       args.errors,
      formulary_status:             args.formulary_status,
      formulary_status_text:        args.formulary_status_text,
      plan:                         new Plan(args.plan),
      preferred_ndcs:               args.preferred_ndcs
    });
  }
}

export {
  Plan,
  Payer,
  Account,
  Formulary,
};
