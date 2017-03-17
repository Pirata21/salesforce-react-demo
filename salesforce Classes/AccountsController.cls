global class AccountsController
{

  @RemoteAction
   global static Account[] getAccts()
   {
     return [SELECT id, name, Owner.Name, Website FROM account];
   }

  
   }