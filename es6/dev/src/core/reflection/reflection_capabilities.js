import { isPresent, isFunction, global, stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
export class ReflectionCapabilities {
    constructor(reflect) {
        this._reflect = isPresent(reflect) ? reflect : global.Reflect;
    }
    isReflectionEnabled() { return true; }
    factory(t) {
        switch (t.length) {
            case 0:
                return () => new t();
            case 1:
                return (a1) => new t(a1);
            case 2:
                return (a1, a2) => new t(a1, a2);
            case 3:
                return (a1, a2, a3) => new t(a1, a2, a3);
            case 4:
                return (a1, a2, a3, a4) => new t(a1, a2, a3, a4);
            case 5:
                return (a1, a2, a3, a4, a5) => new t(a1, a2, a3, a4, a5);
            case 6:
                return (a1, a2, a3, a4, a5, a6) => new t(a1, a2, a3, a4, a5, a6);
            case 7:
                return (a1, a2, a3, a4, a5, a6, a7) => new t(a1, a2, a3, a4, a5, a6, a7);
            case 8:
                return (a1, a2, a3, a4, a5, a6, a7, a8) => new t(a1, a2, a3, a4, a5, a6, a7, a8);
            case 9:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
            case 10:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
            case 11:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
            case 12:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
            case 13:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
            case 14:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
            case 15:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
            case 16:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
            case 17:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
            case 18:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
            case 19:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
            case 20:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
        }
        ;
        throw new Error(`Cannot create a factory for '${stringify(t)}' because its constructor has more than 20 arguments`);
    }
    /** @internal */
    _zipTypesAndAnnotations(paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (isPresent(paramAnnotations) && isPresent(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    }
    parameters(typeOrFunc) {
        // Prefer the direct API.
        if (isPresent(typeOrFunc.parameters)) {
            return typeOrFunc.parameters;
        }
        if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
            if (isPresent(paramTypes) || isPresent(paramAnnotations)) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // The array has to be filled with `undefined` because holes would be skipped by `some`
        let parameters = new Array(typeOrFunc.length);
        parameters.fill(undefined);
        return parameters;
    }
    annotations(typeOrFunc) {
        // Prefer the direct API.
        if (isPresent(typeOrFunc.annotations)) {
            var annotations = typeOrFunc.annotations;
            if (isFunction(annotations) && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
            if (isPresent(annotations))
                return annotations;
        }
        return [];
    }
    propMetadata(typeOrFunc) {
        // Prefer the direct API.
        if (isPresent(typeOrFunc.propMetadata)) {
            var propMetadata = typeOrFunc.propMetadata;
            if (isFunction(propMetadata) && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
            if (isPresent(propMetadata))
                return propMetadata;
        }
        return {};
    }
    interfaces(type) {
        throw new BaseException("JavaScript does not support interfaces");
    }
    getter(name) { return new Function('o', 'return o.' + name + ';'); }
    setter(name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    }
    method(name) {
        let functionBody = `if (!o.${name}) throw new Error('"${name}" is undefined');
        return o.${name}.apply(o, args);`;
        return new Function('o', 'args', functionBody);
    }
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    importUri(type) { return `./${stringify(type)}`; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWxSY0wwMWd1LnRtcC9hbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUVWLE1BQU0sMEJBQTBCO09BQzFCLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBSTVEO0lBR0UsWUFBWSxPQUFhO1FBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFBQyxDQUFDO0lBRTdGLG1CQUFtQixLQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sQ0FBQyxDQUFlO1FBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFELEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsS0FBSyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FDakQsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxLQUFLLENBQUM7Z0JBQ0osTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxLQUMxRCxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUM7Z0JBQ0osTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FDbkUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FDNUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2RCxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RSxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsRUFBRSxHQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ3pCLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdEUsS0FBSyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUMvRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ25DLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsS0FDN0MsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ3ZELElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckYsS0FBSyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUMvRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ2pFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsS0FDM0UsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNyRSxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQzlFLEdBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDaEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQzlFLEdBQVEsRUFBRSxHQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUN0RCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFDOUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDNUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBQUEsQ0FBQztRQUVGLE1BQU0sSUFBSSxLQUFLLENBQ1gsZ0NBQWdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxnQkFBZ0I7UUFDbEQsSUFBSSxNQUFNLENBQUM7UUFFWCxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxzRUFBc0U7WUFDdEUsbUVBQW1FO1lBQ25FLHdDQUF3QztZQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBZ0I7UUFDekIseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBTyxVQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBTyxVQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMzRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1RSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BFLENBQUM7UUFDSCxDQUFDO1FBQ0QsdUZBQXVGO1FBQ3ZGLElBQUksVUFBVSxHQUFHLElBQUksS0FBSyxDQUFPLFVBQVUsQ0FBQyxNQUFPLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQUFnQjtRQUMxQix5QkFBeUI7UUFDekIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFPLFVBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxXQUFXLEdBQVMsVUFBVyxDQUFDLFdBQVcsQ0FBQztZQUNoRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdkUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDakQsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsWUFBWSxDQUFDLFVBQWU7UUFDMUIseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBTyxVQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksWUFBWSxHQUFTLFVBQVcsQ0FBQyxZQUFZLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUMzQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN0QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3pFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ25ELENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE1BQU0sSUFBSSxhQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksSUFBYyxNQUFNLENBQVcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhHLE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE1BQU0sQ0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSx1QkFBdUIsSUFBSTttQkFDN0MsSUFBSSxrQkFBa0IsQ0FBQztRQUN0QyxNQUFNLENBQVcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0dBQWtHO0lBQ2xHLFNBQVMsQ0FBQyxJQUFVLElBQVksTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFR5cGUsXG4gIGlzUHJlc2VudCxcbiAgaXNGdW5jdGlvbixcbiAgZ2xvYmFsLFxuICBzdHJpbmdpZnksXG4gIENvbmNyZXRlVHlwZVxufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtHZXR0ZXJGbiwgU2V0dGVyRm4sIE1ldGhvZEZufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfSBmcm9tICcuL3BsYXRmb3JtX3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcblxuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgaW1wbGVtZW50cyBQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMge1xuICBwcml2YXRlIF9yZWZsZWN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVmbGVjdD86IGFueSkgeyB0aGlzLl9yZWZsZWN0ID0gaXNQcmVzZW50KHJlZmxlY3QpID8gcmVmbGVjdCA6IGdsb2JhbC5SZWZsZWN0OyB9XG5cbiAgaXNSZWZsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cblxuICBmYWN0b3J5KHQ6IENvbmNyZXRlVHlwZSk6IEZ1bmN0aW9uIHtcbiAgICBzd2l0Y2ggKHQubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAoKSA9PiBuZXcgdCgpO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gKGExOiBhbnkpID0+IG5ldyB0KGExKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55KSA9PiBuZXcgdChhMSwgYTIpO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMpO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0KTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpO1xuICAgICAgY2FzZSA5OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSk7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCk7XG4gICAgICBjYXNlIDExOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSk7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyKTtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMpO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCk7XG4gICAgICBjYXNlIDE1OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1KTtcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYpO1xuICAgICAgY2FzZSAxNzpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYTE3KTtcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSwgYTE3OiBhbnksXG4gICAgICAgICAgICAgICAgYTE4OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGExNiwgYTE3LCBhMTgpO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSxcbiAgICAgICAgICAgICAgICBhMTg6IGFueSwgYTE5OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGExNCwgYTE1LCBhMTYsIGExNywgYTE4LCBhMTkpO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSxcbiAgICAgICAgICAgICAgICBhMTg6IGFueSwgYTE5OiBhbnksIGEyMDogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhMTIsIGExMywgYTE0LCBhMTUsIGExNiwgYTE3LCBhMTgsIGExOSwgYTIwKTtcbiAgICB9O1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ2Fubm90IGNyZWF0ZSBhIGZhY3RvcnkgZm9yICcke3N0cmluZ2lmeSh0KX0nIGJlY2F1c2UgaXRzIGNvbnN0cnVjdG9yIGhhcyBtb3JlIHRoYW4gMjAgYXJndW1lbnRzYCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF96aXBUeXBlc0FuZEFubm90YXRpb25zKHBhcmFtVHlwZXMsIHBhcmFtQW5ub3RhdGlvbnMpOiBhbnlbXVtdIHtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtQW5ub3RhdGlvbnMubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtVHlwZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVFMgb3V0cHV0cyBPYmplY3QgZm9yIHBhcmFtZXRlcnMgd2l0aG91dCB0eXBlcywgd2hpbGUgVHJhY2V1ciBvbWl0c1xuICAgICAgLy8gdGhlIGFubm90YXRpb25zLiBGb3Igbm93IHdlIHByZXNlcnZlIHRoZSBUcmFjZXVyIGJlaGF2aW9yIHRvIGFpZFxuICAgICAgLy8gbWlncmF0aW9uLCBidXQgdGhpcyBjYW4gYmUgcmV2aXNpdGVkLlxuICAgICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1UeXBlc1tpXSAhPSBPYmplY3QpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW3BhcmFtVHlwZXNbaV1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXNQcmVzZW50KHBhcmFtQW5ub3RhdGlvbnMpICYmIGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zW2ldKSkge1xuICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0uY29uY2F0KHBhcmFtQW5ub3RhdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyYW1ldGVycyh0eXBlT3JGdW5jOiBUeXBlKTogYW55W11bXSB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmIChpc1ByZXNlbnQoKDxhbnk+dHlwZU9yRnVuYykucGFyYW1ldGVycykpIHtcbiAgICAgIHJldHVybiAoPGFueT50eXBlT3JGdW5jKS5wYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIHBhcmFtQW5ub3RhdGlvbnMgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdwYXJhbWV0ZXJzJywgdHlwZU9yRnVuYyk7XG4gICAgICB2YXIgcGFyYW1UeXBlcyA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgdHlwZU9yRnVuYyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHBhcmFtVHlwZXMpIHx8IGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5femlwVHlwZXNBbmRBbm5vdGF0aW9ucyhwYXJhbVR5cGVzLCBwYXJhbUFubm90YXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIGFycmF5IGhhcyB0byBiZSBmaWxsZWQgd2l0aCBgdW5kZWZpbmVkYCBiZWNhdXNlIGhvbGVzIHdvdWxkIGJlIHNraXBwZWQgYnkgYHNvbWVgXG4gICAgbGV0IHBhcmFtZXRlcnMgPSBuZXcgQXJyYXkoKDxhbnk+dHlwZU9yRnVuYy5sZW5ndGgpKTtcbiAgICBwYXJhbWV0ZXJzLmZpbGwodW5kZWZpbmVkKTtcbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIGFubm90YXRpb25zKHR5cGVPckZ1bmM6IFR5cGUpOiBhbnlbXSB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmIChpc1ByZXNlbnQoKDxhbnk+dHlwZU9yRnVuYykuYW5ub3RhdGlvbnMpKSB7XG4gICAgICB2YXIgYW5ub3RhdGlvbnMgPSAoPGFueT50eXBlT3JGdW5jKS5hbm5vdGF0aW9ucztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGFubm90YXRpb25zKSAmJiBhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucykge1xuICAgICAgICBhbm5vdGF0aW9ucyA9IGFubm90YXRpb25zLmFubm90YXRpb25zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIGFubm90YXRpb25zID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgnYW5ub3RhdGlvbnMnLCB0eXBlT3JGdW5jKTtcbiAgICAgIGlmIChpc1ByZXNlbnQoYW5ub3RhdGlvbnMpKSByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3BNZXRhZGF0YSh0eXBlT3JGdW5jOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55W119IHtcbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKGlzUHJlc2VudCgoPGFueT50eXBlT3JGdW5jKS5wcm9wTWV0YWRhdGEpKSB7XG4gICAgICB2YXIgcHJvcE1ldGFkYXRhID0gKDxhbnk+dHlwZU9yRnVuYykucHJvcE1ldGFkYXRhO1xuICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcE1ldGFkYXRhKSAmJiBwcm9wTWV0YWRhdGEucHJvcE1ldGFkYXRhKSB7XG4gICAgICAgIHByb3BNZXRhZGF0YSA9IHByb3BNZXRhZGF0YS5wcm9wTWV0YWRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcE1ldGFkYXRhO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIHByb3BNZXRhZGF0YSA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ3Byb3BNZXRhZGF0YScsIHR5cGVPckZ1bmMpO1xuICAgICAgaWYgKGlzUHJlc2VudChwcm9wTWV0YWRhdGEpKSByZXR1cm4gcHJvcE1ldGFkYXRhO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpbnRlcmZhY2VzKHR5cGU6IFR5cGUpOiBhbnlbXSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXCJKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlc1wiKTtcbiAgfVxuXG4gIGdldHRlcihuYW1lOiBzdHJpbmcpOiBHZXR0ZXJGbiB7IHJldHVybiA8R2V0dGVyRm4+bmV3IEZ1bmN0aW9uKCdvJywgJ3JldHVybiBvLicgKyBuYW1lICsgJzsnKTsgfVxuXG4gIHNldHRlcihuYW1lOiBzdHJpbmcpOiBTZXR0ZXJGbiB7XG4gICAgcmV0dXJuIDxTZXR0ZXJGbj5uZXcgRnVuY3Rpb24oJ28nLCAndicsICdyZXR1cm4gby4nICsgbmFtZSArICcgPSB2OycpO1xuICB9XG5cbiAgbWV0aG9kKG5hbWU6IHN0cmluZyk6IE1ldGhvZEZuIHtcbiAgICBsZXQgZnVuY3Rpb25Cb2R5ID0gYGlmICghby4ke25hbWV9KSB0aHJvdyBuZXcgRXJyb3IoJ1wiJHtuYW1lfVwiIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICByZXR1cm4gby4ke25hbWV9LmFwcGx5KG8sIGFyZ3MpO2A7XG4gICAgcmV0dXJuIDxNZXRob2RGbj5uZXcgRnVuY3Rpb24oJ28nLCAnYXJncycsIGZ1bmN0aW9uQm9keSk7XG4gIH1cblxuICAvLyBUaGVyZSBpcyBub3QgYSBjb25jZXB0IG9mIGltcG9ydCB1cmkgaW4gSnMsIGJ1dCB0aGlzIGlzIHVzZWZ1bCBpbiBkZXZlbG9waW5nIERhcnQgYXBwbGljYXRpb25zLlxuICBpbXBvcnRVcmkodHlwZTogVHlwZSk6IHN0cmluZyB7IHJldHVybiBgLi8ke3N0cmluZ2lmeSh0eXBlKX1gOyB9XG59XG4iXX0=