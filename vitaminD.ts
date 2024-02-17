/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";

import * as ExpoDevice from "expo-device";

import base64 from "react-native-base64";

function vitaminD() {

    const timeExposed = 0;
    const uvIndex = 0;
    const ascf = 0;
    const gcf = 0;
    const IU = 0;
    const stf = 0;
    const fbe = 0;
    const af = 0;

    const [sed, setSed] = useState<number>(0);
    const [vdd, setVdd] = useState<number>(0);
    const [vitaminD, setVitaminD] = useState<number>(0);

    const calculateSed = (uvIndex/40) * timeExposed;
    setSed(calculateSed);
    
    const calculatVdd = sed * ascf * gcf;
    setVdd(calculatVdd);

    const calculateVitaminD = vdd * (4861 * IU / sed) * stf * fbe * af;
    setVitaminD(calculateVitaminD);


}

export default vitaminD;
