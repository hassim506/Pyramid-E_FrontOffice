import { HasPermissionDirective } from './has-permission-directive.directive';
import { TestBed } from '@angular/core/testing';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from '../shared/service/permission/permission.service';

describe('HasPermissionDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [
        PermissionService,
        {
          provide: TemplateRef,
          useValue: {}
        },
        {
          provide: ViewContainerRef,
          useValue: {}
        }
      ]
    });
    
    const templateRef = TestBed.inject(TemplateRef);
    const viewContainer = TestBed.inject(ViewContainerRef);
    const permissionService = TestBed.inject(PermissionService);
    
    const directive = new HasPermissionDirective(templateRef, viewContainer, permissionService);
    expect(directive).toBeTruthy();
  });
});
