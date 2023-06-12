export const environment = {  
    production: false,  
    baseUrl:'http://localhost:29159/',  
    scopeUri: ['api://e330de8d-ff8c-480c-9563-9b8d54b1ffe4/ReadAccess'],  
    tenantId: 'd751ec74-cfd9-47e5-a4c2-d7fa24503caa',  
    uiClienId: 'e330de8d-ff8c-480c-9563-9b8d54b1ffe4',  
    redirectUrl: 'http://localhost:29159/projecttask-list',

    todoListApi: {
      endpoint:'http://localhost:29155/ProjectTask/api/v1/manager/',
      scopeUri: ['api://e330de8d-ff8c-480c-9563-9b8d54b1ffe4/ReadAccess']

    }
  };  