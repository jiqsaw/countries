// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';
// import { ENTITY, IApiParam, IEntity, IEntityBase, IEntityList, IMeta } from '../models/entity.model';

// export abstract class BaseService<T extends IEntityBase> {

//   constructor(
//     private entity: ENTITY,
//     protected http: HttpClient,
//   ) { }

//   get(params$?: Observable<IApiParam>): Observable<IEntityList<T>> {
//     if (!params$ || params$ === null) {
//       return this.http.get<IEntityList<T>>(this.generateUrl());
//     } else {
//       return params$.pipe(
//         debounceTime(environment.debounceDuration), distinctUntilChanged(),
//         switchMap((params: IApiParam) => this.http.get<IEntityList<T>>(this.generateUrl(params)))
//       );
//     }
//   }

//   getList(params?: IApiParam): Observable<IEntityList<T>> {
//     return this.http.get<IEntityList<T>>(this.generateUrl(params));
//   }

//   getObject(params?: IApiParam, customHeaders?: HttpHeaders): Observable<IEntity<T>> {
//     return this.http.get<IEntity<T>>(this.generateUrl(params), { headers: customHeaders });
//   }

// }
