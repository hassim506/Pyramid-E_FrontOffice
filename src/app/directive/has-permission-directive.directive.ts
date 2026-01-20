import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// import { PermissionService } from '../../shared/service/permissions/permission.service';
import { PermissionService } from '../shared/service/permission/permission.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  @Input() set appHasPermission(permission: string) {
    if (this.permissionService.hasPermission(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}