import Icons, { DualToneIcons } from './FontAwesomeIcons';
const IconTypes = {
    fal: 'FontAwesome5Pro-Light',
    far: 'FontAwesome5Pro-Regular',
    fas: 'FontAwesome5Pro-Solid',
    fab: 'FontAwesome5Brands-Regular',
    fad: 'FontAwesome5Duotone-Solid',
};
const parseIconFromClassName = (iconName, dualTone) => {
    if (!iconName)
        return;
    iconName = iconName.replace(/(fa\-)/gi, '');
    iconName = iconName.replace(/(fa|fas|far|fal)( )/gi, '');
    let nameParts = iconName.match(/(\-)(\w{1,1})/gi) || [];
    nameParts.forEach(m => {
        iconName = iconName.replace(m, m.toUpperCase());
    });
    iconName = iconName.replace(/\-/gi, '');
    iconName = (iconName || '').trim();
    return dualTone ? DualToneIcons[iconName] : Icons[iconName];
};
export { Icons, IconTypes, parseIconFromClassName };
