import { useState } from 'react'; 
import { Actionsheet, ActionsheetIcon, ActionsheetBackdrop,
    ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper,
    ActionsheetItem, ActionsheetItemText, ActionsheetFlatList, ActionsheetScrollView,
    ActionsheetSectionList, ActionsheetSectionHeaderText, ActionsheetVirtualizedList, InputIcon, InputSlot, AddIcon, ShareIcon } from '@gluestack-ui/themed';
    
    
    import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, Input, InputField, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, ButtonText, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel, Textarea, TextareaInput, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircleIcon, CheckIcon, AlertCircleIcon, ChevronDownIcon } from '@gluestack-ui/themed';
    import { Center } from '@gluestack-ui/themed';
    import React from 'react';
    import { Avatar, AvatarGroup, AvatarBadge, AvatarFallbackText, AvatarImage, HStack, Icon } from '@gluestack-ui/themed';
    import {PlayIcon, FavouriteIcon, CloseIcon, Alert, AlertIcon, AlertTitle, AlertDescription, AlertCloseButton } from '@gluestack-ui/themed';
    import { config } from '@gluestack-ui/config';
    import { Box, Button, GluestackUIProvider, Text, Image, VStack, Heading, Link } from '@gluestack-ui/themed';
    import { ScrollView } from 'react-native';
    import Gradient from './assets/Icons/Gradient';
    import DocumentData from './assets/Icons/DocumentData';
    import LightBulbPerson from './assets/Icons/LightbulbPerson';
    import Rocket from './assets/Icons/Rocket';
    import Logo from './assets/Icons/Logo';
    export default function App() {
        const [showActionsheet, setShowActionsheet] = React.useState(false)
        const handleClose = () => setShowActionsheet(!showActionsheet)
        return <GluestackUIProvider config={config}>
        <Home />
        </GluestackUIProvider>;
    }
    const Home = () => {
        return <Container />;
    };
    const FeatureCard = ({
        iconSvg: IconSvg,
        name,
        desc
    }) => {
        return <Box flexDirection="column" borderWidth={1} borderColor="$borderDark700" sx={{
            _web: {
                flex: 1
            }
        }} m="$2" p="$4" rounded="$md">
        
        <Box alignItems="center" display="flex" flexDirection="row">
        {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
        <Text>
        <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
        {name}
        </Text>
        </Box>
        <Text color="$textDark400" mt="$2">
        {desc}
        </Text>
        </Box>;
    };
    const Container = () => {
        
        const [showActionsheet, setShowActionsheet] = React.useState(false);
        const handleClose = () => setShowActionsheet(!showActionsheet);
        return <Box flex={1} backgroundColor="$black">
        <ScrollView style={{
            height: '100%'
        }} contentContainerStyle={{
            flexGrow: 1
        }}>
        <Box position="absolute" sx={{
            '@base': {
                h: 500,
                w: 500
            },
            '@lg': {
                h: 700,
                w: 700
            }
        }}>
        <Gradient />
        </Box>
        <Box height="60%" sx={{
            '@base': {
                my: '$16',
                mx: '$5',
                height: '80%'
            },
            '@lg': {
                my: '$24',
                mx: '$32'
            }
        }} justifyContent="space-between" alignItems="center">
        <Box justifyContent="center" alignItems="center">
        <Logo />
        </Box>
        <Box bg="#64748B33" py="$2" px="$6" rounded="$full" alignItems="center" marginTop={20} sx={{
            '@base': {
                flexDirection: 'column'
            },
            '@sm': {
                flexDirection: 'row'
            },
            '@md': {
                alignSelf: 'flex-start'
            }
        }}>
        
        
        <Text color="$white" fontWeight="$normal">
        Get started by editing
        </Text>
        <Text color="$white" fontWeight="$medium" ml="$2">
        App.tsx
        </Text>
        
        </Box>
        <Box sx={{
            '@base': {
                flexDirection: 'column'
            },
            '@md': {
                flexDirection: 'row'
            }
        }}>
        
        
        <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
        </Button>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
        <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem onPress={handleClose}>
        <ActionsheetIcon>
        <Icon as={ShareIcon} />
        </ActionsheetIcon>
        <ActionsheetItemText>Delete</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
        <ActionsheetIcon>
        <Icon as={ShareIcon} />
        </ActionsheetIcon>
        <ActionsheetItemText>Share</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
        <ActionsheetIcon>
        <Icon as={PlayIcon} />
        </ActionsheetIcon>
        <ActionsheetItemText>Play</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
        <ActionsheetIcon>
        <Icon as={FavouriteIcon} />
        </ActionsheetIcon>
        <ActionsheetItemText>Favourite</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
        <ActionsheetIcon>
        <Icon as={CloseIcon} />
        </ActionsheetIcon>
        <ActionsheetItemText>Cancel</ActionsheetItemText>
        </ActionsheetItem>
        </ActionsheetContent>
        </Actionsheet>
        
        
        <FormControl isInvalid={true} size={"md"} isDisabled={true} isRequired={true}>
        <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
        <InputField type="password" defaultValue="12345" placeholder="password" />
        </Input>
        
        <FormControlHelper>
        <FormControlHelperText>
        Must be atleast 6 characters.
        </FormControlHelperText>
        </FormControlHelper>
        
        <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
        Atleast 6 characters are required.
        </FormControlErrorText>
        </FormControlError>
        </FormControl>
        <FeatureCard iconSvg={DocumentData} name="Docs" desc="Find in-depth information about gluestack features and API." />
        <FeatureCard iconSvg={LightBulbPerson} name="Learn" desc="Learn about gluestack in an interactive course with quizzes!" />
        <FeatureCard iconSvg={Rocket} name="Deploy" desc="Instantly drop your gluestack site to a shareable URL with vercel." />
        <FeatureCard iconSvg={DocumentData} name="Docs" desc="Find in-depth information about gluestack features and API." />
        <FeatureCard iconSvg={DocumentData} name="Docs" desc="Find in-depth information about gluestack features and API." />
        <FeatureCard iconSvg={DocumentData} name="Docs" desc="Find in-depth information about gluestack features and API." />
        <Box maxWidth="$64" borderColor="$borderLight200" borderRadius="$lg" borderWidth="$1" my="$4" overflow="hidden" $base-mx="$5" $dark-bg="$backgroundDark900" $dark-borderColor="$borderDark800">
        <Box>
        <Image h={150} width="100%" alt='oranges' source={{
            uri: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        }} />
        </Box>
        <VStack px="$6" pt="$4" pb="$6">
        <Text $dark-color="$textLight200" fontSize="$sm" my="$1.5">
        August 16, 2023
        </Text>
        <Heading $dark-color="$textLight200" size="sm">
        Fresh Orange
        </Heading>
        <Text my="$1.5" $dark-color="$textLight200" fontSize="$xs">
        Oranges are a great source of vitamin C, which is essential for a
        healthy immune system. Oranges are a great source of vitamin C, which
        is important for maintaining a healthy immune system.
        </Text>
        <Text $dark-color="$textLight200" my="$1.5" fontSize="$xs" isTruncated="true">
        Vitamin C also helps with the absorption of iron and the production of
        collagen, which supports healthy skin, teeth, and bones.
        </Text>
        <Link href="https://gluestack.io/" isExternal>
        <Text fontSize="$sm" color="$pink600">
        Find out more
        </Text>
        </Link>
        </VStack>
        </Box>
        </Box>
        </Box>
        </ScrollView>
        </Box>;
    };