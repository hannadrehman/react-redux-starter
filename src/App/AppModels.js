export default class user {
  constructor(userOb = {}) {
    this.mailId = userOb.mailId || null;
    this.puCode = userOb.puCode || null;
    this.city = userOb.city || null;
    this.empName = userOb.empName || null;
    this.status = userOb.status || null;
    this.project = userOb.project || null;
    this.group = userOb.group || null;
    this.devCenterCode = userOb.devCenterCode || null;
    this.location = userOb.location || null;
    this.empBandCode = userOb.empBandCode || null;
    this.empPSBCode = userOb.empPSBCode || null;
    this.empPBCode = userOb.empPBCode || null;
    this.accountCode = userOb.accountCode || null;
    this.empDUCode = userOb.empDUCode || null;
    this.onsiteOffshoreIndicator = userOb.onsiteOffshoreIndicator || null;
    this.company = userOb.company || null;
    this.archivedReputationScore = userOb.archivedReputationScore || null;
    this.tagCurationCount = userOb.tagCurationCount || null;
    this.tagCreationCount = userOb.tagCreationCount || null;
    this.postCurationCount = userOb.postCurationCount || null;
    this.questionAskedCount = userOb.questionAskedCount || null;
    this.answersAddedCount = userOb.answersAddedCount || null;
    this.commentsAddedCount = userOb.commentsAddedCount || null;
    this.answersAcceptedCount = userOb.answersAcceptedCount || null;
    this.voteActivityCount = userOb.voteActivityCount || null;
    this.shareCount = userOb.shareCount || null;
    this.flagCount = userOb.flagCount || null;
    this.bookmarkCount = userOb.bookmarkCount || null;
    this.groups = userOb.groups || [];
    this.tenants = userOb.tenants || [];
    this.isLoggedIn = (Object.keys(userOb).length > 0);
    this.loginTime = (this.isLoggedIn === true) ? new Date().getTime() : null;
  }
}
